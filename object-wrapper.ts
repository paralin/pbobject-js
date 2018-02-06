import { IObject } from './object'
import { IEncryptionConfig } from './enc-conf'
import { pbobject } from './pb'
import { newSignature, Signature } from '@aperturerobotics/objectsig'
import { Encrypt, Decrypt, objectenc } from '@aperturerobotics/objectenc'
import { getTypeIdCrc32 } from './type-id'

// ObjectWrapper wraps an object with type information and signatures.
export class ObjectWrapper extends pbobject.ObjectWrapper {
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
        return obj.decode(objData)
    }
}

// newObjectWrapper builds a new object wrapper.
export async function newObjectWrapper(obj: IObject, encConf: IEncryptionConfig, ts?: Date): Promise<ObjectWrapper> {
    ts = ts || new Date()
    let data = obj.encode(obj).finish()

    // Build any signatures
    let signerKeys = encConf.signerKeys || []
    let signatures: Signature[] = []
    for (let signerKey of signerKeys) {
        signatures.push(await newSignature(signerKey, data))
    }

    let encType = encConf.encryptionType || objectenc.EncryptionType.EncryptionType_UNENCRYPTED
    let encBlob = await Encrypt(encType, data, encConf.resourceLookup)
    return new ObjectWrapper({
        timestamp: { timeUnixMs: Math.floor(ts.valueOf()) },
        objectTypeCrc: getTypeIdCrc32(obj.getObjectTypeId()),
        encBlob,
        signatures,
    })
}
