import { IObject } from './object'
import { IEncryptionConfig } from './enc-conf'
import { pbobject } from './pb'
import { timestamp } from '@aperturerobotics/timestamp'
import { newSignature, Signature } from '@aperturerobotics/objectsig'
import { Encrypt, objectenc } from '@aperturerobotics/objectenc'
import { getTypeIdCrc32 } from './type-id'

// ObjectWrapper wraps an object with type information and signatures.
export class ObjectWrapper extends pbobject.ObjectWrapper { }

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
