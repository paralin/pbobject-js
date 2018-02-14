import { IObject } from './object'
import { IEncryptionConfig } from './enc-conf'
import { pbobject } from './pb'
import { newSignature, Signature } from '@aperturerobotics/objectsig'
import { Encrypt, Decrypt, objectenc } from '@aperturerobotics/objectenc'
import { getTypeIdCrc32 } from './type-id'

// ObjectWrapper wraps an object with type information and signatures.
export class ObjectWrapper extends pbobject.ObjectWrapper {
    // decodeToObject decodes the object wrapper to an object.
    public async decodeToObject(obj: IObject, encConf: IEncryptionConfig): Promise<IObject> {
        if (!this.encBlob) {
            throw new Error(`encrypted blob is empty`)
        }

        let expectedID = getTypeIdCrc32(obj.getObjectTypeId())
        if (expectedID !== this.objectTypeCrc) {
            throw new Error(`object type mismatch: expected ${expectedID} got ${this.objectTypeCrc}`)
        }

        let encBlob = objectenc.EncryptedBlob.create(this.encBlob)
        let objData = await Decrypt(encBlob, encConf.resourceLookup)

        let verifyKeys: any[] = encConf.verifyKeys || []
        for (let publicKey of verifyKeys) {
            if (!publicKey.verify) {
                throw new Error('given verify key is not a valid public key')
            }

            let foundSig = false
            for (let sigMsg of this.signatures) {
                let sig = new Signature(sigMsg)
                if (!sig.matchesPublicKey(publicKey)) {
                    continue
                }

                foundSig = true
                await sig.verify(publicKey, objData)
                break
            }

            if (!foundSig) {
                throw new Error('message not signed by required key')
            }
        }

        return obj.decode(objData)
    }
}

// INewObjectWrapperResult is returned when an object wrapper is built.
export interface INewObjectWrapperResult {
    // Data is the encoded object.
    data: Uint8Array
    // Wrapper is the object wrapper.
    wrapper: ObjectWrapper
}

// newObjectWrapper builds a new object wrapper.
export async function newObjectWrapper(obj: IObject, encConf: IEncryptionConfig): Promise<INewObjectWrapperResult> {
    let data = obj.encode(obj).finish()

    // Build any signatures
    let signerKeys = encConf.signerKeys || []
    let signatures: Signature[] = []
    for (let signerKey of signerKeys) {
        signatures.push(await newSignature(signerKey, data))
    }

    let encType = encConf.encryptionType || objectenc.EncryptionType.EncryptionType_UNENCRYPTED
    let cmpType = encConf.compressionType || objectenc.CompressionType.CompressionType_UNCOMPRESSED
    let encBlob = await Encrypt(encType, cmpType, data, encConf.resourceLookup)
    return {
        data,
        wrapper: new ObjectWrapper({
            objectTypeCrc: getTypeIdCrc32(obj.getObjectTypeId()),
            encBlob,
            signatures,
        }),
    }
}
