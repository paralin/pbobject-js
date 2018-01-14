import { pbobject } from './pb'
import * as crc from 'crc-32'

// getTypeIdCrc32 returns the crc32 of the type ID.
export function getTypeIdCrc32(id: pbobject.IObjectTypeID): number {
    let dat = pbobject.ObjectTypeID.encode(id).finish()
    let crcSigned = crc.buf(dat)
    return crcSigned >>> 0 // unsigned
}
