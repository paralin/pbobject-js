import { pbobject } from './pb'
import * as $protobuf from 'protobufjs'

// IObject is a protobuf-encoded object.
export interface IObject {
    /* Returns the object type ID.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    getObjectTypeId(): pbobject.IObjectTypeID

    /* Encodes the specified message.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    encode(message: any, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Decodes an Object message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Object
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    decode(reader: $protobuf.Reader | Uint8Array, length?: number): IObject
}
