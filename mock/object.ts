import { pbobject } from '../pb'
import { IObject } from '../object'
import { mock } from './mock-object'

import * as $protobuf from 'protobufjs'

export class MockObject extends mock.MockObject implements IObject {
    /* Returns the object type ID.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public getObjectTypeId(): pbobject.IObjectTypeID {
        return { typeUuid: "/mock/object/0.0.1" }
    }

    /* Encodes the specified message.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public encode(message: any, writer?: $protobuf.Writer): $protobuf.Writer {
        return mock.MockObject.encode(message, writer)
    }

    /**
     * Decodes an Object message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Object
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public decode(reader: $protobuf.Reader | Uint8Array, length?: number): IObject {
        return new MockObject(mock.MockObject.decode(reader, length))
    }
}
