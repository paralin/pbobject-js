import {
    pbobject,
    getTypeIdCrc32,
} from '../index'

describe('ObjectTypeID', () => {
    it('returns correct type crc32', () => {
        let crc = getTypeIdCrc32({ typeUuid: "/mock/object/0.0.1" })
        expect(crc).toEqual(3957319027) // pre-computed in Go implementation
    })
})
