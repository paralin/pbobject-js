/* tslint:disable */
import * as $protobuf from "protobufjs";

/** Namespace pbobject. */
export namespace pbobject {

    /** Properties of an ObjectWrapper. */
    interface IObjectWrapper {

        /** ObjectWrapper objectTypeCrc */
        objectTypeCrc?: (number|null);

        /** ObjectWrapper encBlob */
        encBlob?: (objectenc.IEncryptedBlob|null);

        /** ObjectWrapper signatures */
        signatures?: (objectsig.ISignature[]|null);
    }

    /** Represents an ObjectWrapper. */
    class ObjectWrapper implements IObjectWrapper {

        /**
         * Constructs a new ObjectWrapper.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbobject.IObjectWrapper);

        /** ObjectWrapper objectTypeCrc. */
        public objectTypeCrc: number;

        /** ObjectWrapper encBlob. */
        public encBlob?: (objectenc.IEncryptedBlob|null);

        /** ObjectWrapper signatures. */
        public signatures: objectsig.ISignature[];

        /**
         * Creates a new ObjectWrapper instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectWrapper instance
         */
        public static create(properties?: pbobject.IObjectWrapper): pbobject.ObjectWrapper;

        /**
         * Encodes the specified ObjectWrapper message. Does not implicitly {@link pbobject.ObjectWrapper.verify|verify} messages.
         * @param message ObjectWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbobject.IObjectWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObjectWrapper message, length delimited. Does not implicitly {@link pbobject.ObjectWrapper.verify|verify} messages.
         * @param message ObjectWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pbobject.IObjectWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObjectWrapper message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbobject.ObjectWrapper;

        /**
         * Decodes an ObjectWrapper message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pbobject.ObjectWrapper;

        /**
         * Verifies an ObjectWrapper message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObjectWrapper message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObjectWrapper
         */
        public static fromObject(object: { [k: string]: any }): pbobject.ObjectWrapper;

        /**
         * Creates a plain object from an ObjectWrapper message. Also converts values to other types if specified.
         * @param message ObjectWrapper
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pbobject.ObjectWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObjectWrapper to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ObjectTypeID. */
    interface IObjectTypeID {

        /** ObjectTypeID typeUuid */
        typeUuid?: (string|null);
    }

    /** Represents an ObjectTypeID. */
    class ObjectTypeID implements IObjectTypeID {

        /**
         * Constructs a new ObjectTypeID.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbobject.IObjectTypeID);

        /** ObjectTypeID typeUuid. */
        public typeUuid: string;

        /**
         * Creates a new ObjectTypeID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectTypeID instance
         */
        public static create(properties?: pbobject.IObjectTypeID): pbobject.ObjectTypeID;

        /**
         * Encodes the specified ObjectTypeID message. Does not implicitly {@link pbobject.ObjectTypeID.verify|verify} messages.
         * @param message ObjectTypeID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbobject.IObjectTypeID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObjectTypeID message, length delimited. Does not implicitly {@link pbobject.ObjectTypeID.verify|verify} messages.
         * @param message ObjectTypeID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pbobject.IObjectTypeID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObjectTypeID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectTypeID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbobject.ObjectTypeID;

        /**
         * Decodes an ObjectTypeID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectTypeID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pbobject.ObjectTypeID;

        /**
         * Verifies an ObjectTypeID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObjectTypeID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObjectTypeID
         */
        public static fromObject(object: { [k: string]: any }): pbobject.ObjectTypeID;

        /**
         * Creates a plain object from an ObjectTypeID message. Also converts values to other types if specified.
         * @param message ObjectTypeID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pbobject.ObjectTypeID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObjectTypeID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace timestamp. */
export namespace timestamp {

    /** Properties of a Timestamp. */
    interface ITimestamp {

        /** Timestamp timeUnixMs */
        timeUnixMs?: (number|Long|null);
    }

    /** Represents a Timestamp. */
    class Timestamp implements ITimestamp {

        /**
         * Constructs a new Timestamp.
         * @param [properties] Properties to set
         */
        constructor(properties?: timestamp.ITimestamp);

        /** Timestamp timeUnixMs. */
        public timeUnixMs: (number|Long);

        /**
         * Creates a new Timestamp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Timestamp instance
         */
        public static create(properties?: timestamp.ITimestamp): timestamp.Timestamp;

        /**
         * Encodes the specified Timestamp message. Does not implicitly {@link timestamp.Timestamp.verify|verify} messages.
         * @param message Timestamp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: timestamp.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link timestamp.Timestamp.verify|verify} messages.
         * @param message Timestamp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: timestamp.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Timestamp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): timestamp.Timestamp;

        /**
         * Decodes a Timestamp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): timestamp.Timestamp;

        /**
         * Verifies a Timestamp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Timestamp
         */
        public static fromObject(object: { [k: string]: any }): timestamp.Timestamp;

        /**
         * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
         * @param message Timestamp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: timestamp.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Timestamp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace objectenc. */
export namespace objectenc {

    /** Properties of an EncryptedBlob. */
    interface IEncryptedBlob {

        /** EncryptedBlob encType */
        encType?: (objectenc.EncryptionType|null);

        /** EncryptedBlob encData */
        encData?: (Uint8Array|null);

        /** EncryptedBlob encMetadata */
        encMetadata?: (Uint8Array|null);
    }

    /** Represents an EncryptedBlob. */
    class EncryptedBlob implements IEncryptedBlob {

        /**
         * Constructs a new EncryptedBlob.
         * @param [properties] Properties to set
         */
        constructor(properties?: objectenc.IEncryptedBlob);

        /** EncryptedBlob encType. */
        public encType: objectenc.EncryptionType;

        /** EncryptedBlob encData. */
        public encData: Uint8Array;

        /** EncryptedBlob encMetadata. */
        public encMetadata: Uint8Array;

        /**
         * Creates a new EncryptedBlob instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncryptedBlob instance
         */
        public static create(properties?: objectenc.IEncryptedBlob): objectenc.EncryptedBlob;

        /**
         * Encodes the specified EncryptedBlob message. Does not implicitly {@link objectenc.EncryptedBlob.verify|verify} messages.
         * @param message EncryptedBlob message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: objectenc.IEncryptedBlob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncryptedBlob message, length delimited. Does not implicitly {@link objectenc.EncryptedBlob.verify|verify} messages.
         * @param message EncryptedBlob message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: objectenc.IEncryptedBlob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncryptedBlob message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncryptedBlob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): objectenc.EncryptedBlob;

        /**
         * Decodes an EncryptedBlob message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncryptedBlob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): objectenc.EncryptedBlob;

        /**
         * Verifies an EncryptedBlob message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncryptedBlob message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncryptedBlob
         */
        public static fromObject(object: { [k: string]: any }): objectenc.EncryptedBlob;

        /**
         * Creates a plain object from an EncryptedBlob message. Also converts values to other types if specified.
         * @param message EncryptedBlob
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: objectenc.EncryptedBlob, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncryptedBlob to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** EncryptionType enum. */
    enum EncryptionType {
        EncryptionType_UNENCRYPTED = 0,
        EncryptionType_AES = 1
    }
}

/** Namespace objectsig. */
export namespace objectsig {

    /** Properties of a Signature. */
    interface ISignature {

        /** Signature keyMultihash */
        keyMultihash?: (Uint8Array|null);

        /** Signature signature */
        signature?: (Uint8Array|null);
    }

    /** Represents a Signature. */
    class Signature implements ISignature {

        /**
         * Constructs a new Signature.
         * @param [properties] Properties to set
         */
        constructor(properties?: objectsig.ISignature);

        /** Signature keyMultihash. */
        public keyMultihash: Uint8Array;

        /** Signature signature. */
        public signature: Uint8Array;

        /**
         * Creates a new Signature instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Signature instance
         */
        public static create(properties?: objectsig.ISignature): objectsig.Signature;

        /**
         * Encodes the specified Signature message. Does not implicitly {@link objectsig.Signature.verify|verify} messages.
         * @param message Signature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: objectsig.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Signature message, length delimited. Does not implicitly {@link objectsig.Signature.verify|verify} messages.
         * @param message Signature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: objectsig.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Signature message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): objectsig.Signature;

        /**
         * Decodes a Signature message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): objectsig.Signature;

        /**
         * Verifies a Signature message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Signature
         */
        public static fromObject(object: { [k: string]: any }): objectsig.Signature;

        /**
         * Creates a plain object from a Signature message. Also converts values to other types if specified.
         * @param message Signature
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: objectsig.Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Signature to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
