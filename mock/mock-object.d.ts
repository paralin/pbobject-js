import * as $protobuf from "protobufjs";

/** Namespace mock. */
export namespace mock {

    /** Properties of a MockObject. */
    interface IMockObject {

        /** MockObject testField */
        testField?: (string|null);
    }

    /** Represents a MockObject. */
    class MockObject implements IMockObject {

        /**
         * Constructs a new MockObject.
         * @param [properties] Properties to set
         */
        constructor(properties?: mock.IMockObject);

        /** MockObject testField. */
        public testField: string;

        /**
         * Creates a new MockObject instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MockObject instance
         */
        public static create(properties?: mock.IMockObject): mock.MockObject;

        /**
         * Encodes the specified MockObject message. Does not implicitly {@link mock.MockObject.verify|verify} messages.
         * @param message MockObject message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mock.IMockObject, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MockObject message, length delimited. Does not implicitly {@link mock.MockObject.verify|verify} messages.
         * @param message MockObject message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mock.IMockObject, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MockObject message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MockObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mock.MockObject;

        /**
         * Decodes a MockObject message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MockObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mock.MockObject;

        /**
         * Verifies a MockObject message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MockObject message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MockObject
         */
        public static fromObject(object: { [k: string]: any }): mock.MockObject;

        /**
         * Creates a plain object from a MockObject message. Also converts values to other types if specified.
         * @param message MockObject
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mock.MockObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MockObject to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
