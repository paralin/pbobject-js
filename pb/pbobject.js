/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pbobject = (function() {

    /**
     * Namespace pbobject.
     * @exports pbobject
     * @namespace
     */
    var pbobject = {};

    pbobject.ObjectWrapper = (function() {

        /**
         * Properties of an ObjectWrapper.
         * @memberof pbobject
         * @interface IObjectWrapper
         * @property {number|null} [objectTypeCrc] ObjectWrapper objectTypeCrc
         * @property {objectenc.IEncryptedBlob|null} [encBlob] ObjectWrapper encBlob
         * @property {Array.<objectsig.ISignature>|null} [signatures] ObjectWrapper signatures
         */

        /**
         * Constructs a new ObjectWrapper.
         * @memberof pbobject
         * @classdesc Represents an ObjectWrapper.
         * @implements IObjectWrapper
         * @constructor
         * @param {pbobject.IObjectWrapper=} [properties] Properties to set
         */
        function ObjectWrapper(properties) {
            this.signatures = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectWrapper objectTypeCrc.
         * @member {number} objectTypeCrc
         * @memberof pbobject.ObjectWrapper
         * @instance
         */
        ObjectWrapper.prototype.objectTypeCrc = 0;

        /**
         * ObjectWrapper encBlob.
         * @member {objectenc.IEncryptedBlob|null|undefined} encBlob
         * @memberof pbobject.ObjectWrapper
         * @instance
         */
        ObjectWrapper.prototype.encBlob = null;

        /**
         * ObjectWrapper signatures.
         * @member {Array.<objectsig.ISignature>} signatures
         * @memberof pbobject.ObjectWrapper
         * @instance
         */
        ObjectWrapper.prototype.signatures = $util.emptyArray;

        /**
         * Creates a new ObjectWrapper instance using the specified properties.
         * @function create
         * @memberof pbobject.ObjectWrapper
         * @static
         * @param {pbobject.IObjectWrapper=} [properties] Properties to set
         * @returns {pbobject.ObjectWrapper} ObjectWrapper instance
         */
        ObjectWrapper.create = function create(properties) {
            return new ObjectWrapper(properties);
        };

        /**
         * Encodes the specified ObjectWrapper message. Does not implicitly {@link pbobject.ObjectWrapper.verify|verify} messages.
         * @function encode
         * @memberof pbobject.ObjectWrapper
         * @static
         * @param {pbobject.IObjectWrapper} message ObjectWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectWrapper.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.objectTypeCrc != null && message.hasOwnProperty("objectTypeCrc"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.objectTypeCrc);
            if (message.encBlob != null && message.hasOwnProperty("encBlob"))
                $root.objectenc.EncryptedBlob.encode(message.encBlob, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.signatures != null && message.signatures.length)
                for (var i = 0; i < message.signatures.length; ++i)
                    $root.objectsig.Signature.encode(message.signatures[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ObjectWrapper message, length delimited. Does not implicitly {@link pbobject.ObjectWrapper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbobject.ObjectWrapper
         * @static
         * @param {pbobject.IObjectWrapper} message ObjectWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectWrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ObjectWrapper message from the specified reader or buffer.
         * @function decode
         * @memberof pbobject.ObjectWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbobject.ObjectWrapper} ObjectWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectWrapper.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbobject.ObjectWrapper();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.objectTypeCrc = reader.uint32();
                    break;
                case 3:
                    message.encBlob = $root.objectenc.EncryptedBlob.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.signatures && message.signatures.length))
                        message.signatures = [];
                    message.signatures.push($root.objectsig.Signature.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ObjectWrapper message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbobject.ObjectWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbobject.ObjectWrapper} ObjectWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectWrapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ObjectWrapper message.
         * @function verify
         * @memberof pbobject.ObjectWrapper
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ObjectWrapper.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.objectTypeCrc != null && message.hasOwnProperty("objectTypeCrc"))
                if (!$util.isInteger(message.objectTypeCrc))
                    return "objectTypeCrc: integer expected";
            if (message.encBlob != null && message.hasOwnProperty("encBlob")) {
                var error = $root.objectenc.EncryptedBlob.verify(message.encBlob);
                if (error)
                    return "encBlob." + error;
            }
            if (message.signatures != null && message.hasOwnProperty("signatures")) {
                if (!Array.isArray(message.signatures))
                    return "signatures: array expected";
                for (var i = 0; i < message.signatures.length; ++i) {
                    var error = $root.objectsig.Signature.verify(message.signatures[i]);
                    if (error)
                        return "signatures." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ObjectWrapper message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbobject.ObjectWrapper
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbobject.ObjectWrapper} ObjectWrapper
         */
        ObjectWrapper.fromObject = function fromObject(object) {
            if (object instanceof $root.pbobject.ObjectWrapper)
                return object;
            var message = new $root.pbobject.ObjectWrapper();
            if (object.objectTypeCrc != null)
                message.objectTypeCrc = object.objectTypeCrc >>> 0;
            if (object.encBlob != null) {
                if (typeof object.encBlob !== "object")
                    throw TypeError(".pbobject.ObjectWrapper.encBlob: object expected");
                message.encBlob = $root.objectenc.EncryptedBlob.fromObject(object.encBlob);
            }
            if (object.signatures) {
                if (!Array.isArray(object.signatures))
                    throw TypeError(".pbobject.ObjectWrapper.signatures: array expected");
                message.signatures = [];
                for (var i = 0; i < object.signatures.length; ++i) {
                    if (typeof object.signatures[i] !== "object")
                        throw TypeError(".pbobject.ObjectWrapper.signatures: object expected");
                    message.signatures[i] = $root.objectsig.Signature.fromObject(object.signatures[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ObjectWrapper message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbobject.ObjectWrapper
         * @static
         * @param {pbobject.ObjectWrapper} message ObjectWrapper
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObjectWrapper.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.signatures = [];
            if (options.defaults) {
                object.objectTypeCrc = 0;
                object.encBlob = null;
            }
            if (message.objectTypeCrc != null && message.hasOwnProperty("objectTypeCrc"))
                object.objectTypeCrc = message.objectTypeCrc;
            if (message.encBlob != null && message.hasOwnProperty("encBlob"))
                object.encBlob = $root.objectenc.EncryptedBlob.toObject(message.encBlob, options);
            if (message.signatures && message.signatures.length) {
                object.signatures = [];
                for (var j = 0; j < message.signatures.length; ++j)
                    object.signatures[j] = $root.objectsig.Signature.toObject(message.signatures[j], options);
            }
            return object;
        };

        /**
         * Converts this ObjectWrapper to JSON.
         * @function toJSON
         * @memberof pbobject.ObjectWrapper
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObjectWrapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ObjectWrapper;
    })();

    pbobject.ObjectTypeID = (function() {

        /**
         * Properties of an ObjectTypeID.
         * @memberof pbobject
         * @interface IObjectTypeID
         * @property {string|null} [typeUuid] ObjectTypeID typeUuid
         */

        /**
         * Constructs a new ObjectTypeID.
         * @memberof pbobject
         * @classdesc Represents an ObjectTypeID.
         * @implements IObjectTypeID
         * @constructor
         * @param {pbobject.IObjectTypeID=} [properties] Properties to set
         */
        function ObjectTypeID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectTypeID typeUuid.
         * @member {string} typeUuid
         * @memberof pbobject.ObjectTypeID
         * @instance
         */
        ObjectTypeID.prototype.typeUuid = "";

        /**
         * Creates a new ObjectTypeID instance using the specified properties.
         * @function create
         * @memberof pbobject.ObjectTypeID
         * @static
         * @param {pbobject.IObjectTypeID=} [properties] Properties to set
         * @returns {pbobject.ObjectTypeID} ObjectTypeID instance
         */
        ObjectTypeID.create = function create(properties) {
            return new ObjectTypeID(properties);
        };

        /**
         * Encodes the specified ObjectTypeID message. Does not implicitly {@link pbobject.ObjectTypeID.verify|verify} messages.
         * @function encode
         * @memberof pbobject.ObjectTypeID
         * @static
         * @param {pbobject.IObjectTypeID} message ObjectTypeID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectTypeID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.typeUuid != null && message.hasOwnProperty("typeUuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.typeUuid);
            return writer;
        };

        /**
         * Encodes the specified ObjectTypeID message, length delimited. Does not implicitly {@link pbobject.ObjectTypeID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbobject.ObjectTypeID
         * @static
         * @param {pbobject.IObjectTypeID} message ObjectTypeID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectTypeID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ObjectTypeID message from the specified reader or buffer.
         * @function decode
         * @memberof pbobject.ObjectTypeID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbobject.ObjectTypeID} ObjectTypeID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectTypeID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbobject.ObjectTypeID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.typeUuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ObjectTypeID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbobject.ObjectTypeID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbobject.ObjectTypeID} ObjectTypeID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectTypeID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ObjectTypeID message.
         * @function verify
         * @memberof pbobject.ObjectTypeID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ObjectTypeID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.typeUuid != null && message.hasOwnProperty("typeUuid"))
                if (!$util.isString(message.typeUuid))
                    return "typeUuid: string expected";
            return null;
        };

        /**
         * Creates an ObjectTypeID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbobject.ObjectTypeID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbobject.ObjectTypeID} ObjectTypeID
         */
        ObjectTypeID.fromObject = function fromObject(object) {
            if (object instanceof $root.pbobject.ObjectTypeID)
                return object;
            var message = new $root.pbobject.ObjectTypeID();
            if (object.typeUuid != null)
                message.typeUuid = String(object.typeUuid);
            return message;
        };

        /**
         * Creates a plain object from an ObjectTypeID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbobject.ObjectTypeID
         * @static
         * @param {pbobject.ObjectTypeID} message ObjectTypeID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObjectTypeID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.typeUuid = "";
            if (message.typeUuid != null && message.hasOwnProperty("typeUuid"))
                object.typeUuid = message.typeUuid;
            return object;
        };

        /**
         * Converts this ObjectTypeID to JSON.
         * @function toJSON
         * @memberof pbobject.ObjectTypeID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObjectTypeID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ObjectTypeID;
    })();

    return pbobject;
})();

$root.timestamp = (function() {

    /**
     * Namespace timestamp.
     * @exports timestamp
     * @namespace
     */
    var timestamp = {};

    timestamp.Timestamp = (function() {

        /**
         * Properties of a Timestamp.
         * @memberof timestamp
         * @interface ITimestamp
         * @property {number|Long|null} [timeUnixMs] Timestamp timeUnixMs
         */

        /**
         * Constructs a new Timestamp.
         * @memberof timestamp
         * @classdesc Represents a Timestamp.
         * @implements ITimestamp
         * @constructor
         * @param {timestamp.ITimestamp=} [properties] Properties to set
         */
        function Timestamp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Timestamp timeUnixMs.
         * @member {number|Long} timeUnixMs
         * @memberof timestamp.Timestamp
         * @instance
         */
        Timestamp.prototype.timeUnixMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Timestamp instance using the specified properties.
         * @function create
         * @memberof timestamp.Timestamp
         * @static
         * @param {timestamp.ITimestamp=} [properties] Properties to set
         * @returns {timestamp.Timestamp} Timestamp instance
         */
        Timestamp.create = function create(properties) {
            return new Timestamp(properties);
        };

        /**
         * Encodes the specified Timestamp message. Does not implicitly {@link timestamp.Timestamp.verify|verify} messages.
         * @function encode
         * @memberof timestamp.Timestamp
         * @static
         * @param {timestamp.ITimestamp} message Timestamp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timestamp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timeUnixMs != null && message.hasOwnProperty("timeUnixMs"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timeUnixMs);
            return writer;
        };

        /**
         * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link timestamp.Timestamp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof timestamp.Timestamp
         * @static
         * @param {timestamp.ITimestamp} message Timestamp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Timestamp message from the specified reader or buffer.
         * @function decode
         * @memberof timestamp.Timestamp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {timestamp.Timestamp} Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timestamp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.timestamp.Timestamp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timeUnixMs = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Timestamp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof timestamp.Timestamp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {timestamp.Timestamp} Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timestamp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Timestamp message.
         * @function verify
         * @memberof timestamp.Timestamp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Timestamp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timeUnixMs != null && message.hasOwnProperty("timeUnixMs"))
                if (!$util.isInteger(message.timeUnixMs) && !(message.timeUnixMs && $util.isInteger(message.timeUnixMs.low) && $util.isInteger(message.timeUnixMs.high)))
                    return "timeUnixMs: integer|Long expected";
            return null;
        };

        /**
         * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof timestamp.Timestamp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {timestamp.Timestamp} Timestamp
         */
        Timestamp.fromObject = function fromObject(object) {
            if (object instanceof $root.timestamp.Timestamp)
                return object;
            var message = new $root.timestamp.Timestamp();
            if (object.timeUnixMs != null)
                if ($util.Long)
                    (message.timeUnixMs = $util.Long.fromValue(object.timeUnixMs)).unsigned = true;
                else if (typeof object.timeUnixMs === "string")
                    message.timeUnixMs = parseInt(object.timeUnixMs, 10);
                else if (typeof object.timeUnixMs === "number")
                    message.timeUnixMs = object.timeUnixMs;
                else if (typeof object.timeUnixMs === "object")
                    message.timeUnixMs = new $util.LongBits(object.timeUnixMs.low >>> 0, object.timeUnixMs.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof timestamp.Timestamp
         * @static
         * @param {timestamp.Timestamp} message Timestamp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Timestamp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeUnixMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeUnixMs = options.longs === String ? "0" : 0;
            if (message.timeUnixMs != null && message.hasOwnProperty("timeUnixMs"))
                if (typeof message.timeUnixMs === "number")
                    object.timeUnixMs = options.longs === String ? String(message.timeUnixMs) : message.timeUnixMs;
                else
                    object.timeUnixMs = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixMs) : options.longs === Number ? new $util.LongBits(message.timeUnixMs.low >>> 0, message.timeUnixMs.high >>> 0).toNumber(true) : message.timeUnixMs;
            return object;
        };

        /**
         * Converts this Timestamp to JSON.
         * @function toJSON
         * @memberof timestamp.Timestamp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Timestamp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Timestamp;
    })();

    return timestamp;
})();

$root.objectenc = (function() {

    /**
     * Namespace objectenc.
     * @exports objectenc
     * @namespace
     */
    var objectenc = {};

    objectenc.EncryptedBlob = (function() {

        /**
         * Properties of an EncryptedBlob.
         * @memberof objectenc
         * @interface IEncryptedBlob
         * @property {objectenc.EncryptionType|null} [encType] EncryptedBlob encType
         * @property {Uint8Array|null} [encData] EncryptedBlob encData
         * @property {Uint8Array|null} [encMetadata] EncryptedBlob encMetadata
         * @property {objectenc.CompressionType|null} [compressionType] EncryptedBlob compressionType
         */

        /**
         * Constructs a new EncryptedBlob.
         * @memberof objectenc
         * @classdesc Represents an EncryptedBlob.
         * @implements IEncryptedBlob
         * @constructor
         * @param {objectenc.IEncryptedBlob=} [properties] Properties to set
         */
        function EncryptedBlob(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EncryptedBlob encType.
         * @member {objectenc.EncryptionType} encType
         * @memberof objectenc.EncryptedBlob
         * @instance
         */
        EncryptedBlob.prototype.encType = 0;

        /**
         * EncryptedBlob encData.
         * @member {Uint8Array} encData
         * @memberof objectenc.EncryptedBlob
         * @instance
         */
        EncryptedBlob.prototype.encData = $util.newBuffer([]);

        /**
         * EncryptedBlob encMetadata.
         * @member {Uint8Array} encMetadata
         * @memberof objectenc.EncryptedBlob
         * @instance
         */
        EncryptedBlob.prototype.encMetadata = $util.newBuffer([]);

        /**
         * EncryptedBlob compressionType.
         * @member {objectenc.CompressionType} compressionType
         * @memberof objectenc.EncryptedBlob
         * @instance
         */
        EncryptedBlob.prototype.compressionType = 0;

        /**
         * Creates a new EncryptedBlob instance using the specified properties.
         * @function create
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {objectenc.IEncryptedBlob=} [properties] Properties to set
         * @returns {objectenc.EncryptedBlob} EncryptedBlob instance
         */
        EncryptedBlob.create = function create(properties) {
            return new EncryptedBlob(properties);
        };

        /**
         * Encodes the specified EncryptedBlob message. Does not implicitly {@link objectenc.EncryptedBlob.verify|verify} messages.
         * @function encode
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {objectenc.IEncryptedBlob} message EncryptedBlob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EncryptedBlob.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encType != null && message.hasOwnProperty("encType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.encType);
            if (message.encData != null && message.hasOwnProperty("encData"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.encData);
            if (message.encMetadata != null && message.hasOwnProperty("encMetadata"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.encMetadata);
            if (message.compressionType != null && message.hasOwnProperty("compressionType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.compressionType);
            return writer;
        };

        /**
         * Encodes the specified EncryptedBlob message, length delimited. Does not implicitly {@link objectenc.EncryptedBlob.verify|verify} messages.
         * @function encodeDelimited
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {objectenc.IEncryptedBlob} message EncryptedBlob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EncryptedBlob.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EncryptedBlob message from the specified reader or buffer.
         * @function decode
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {objectenc.EncryptedBlob} EncryptedBlob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EncryptedBlob.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.objectenc.EncryptedBlob();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encType = reader.int32();
                    break;
                case 2:
                    message.encData = reader.bytes();
                    break;
                case 3:
                    message.encMetadata = reader.bytes();
                    break;
                case 4:
                    message.compressionType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EncryptedBlob message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {objectenc.EncryptedBlob} EncryptedBlob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EncryptedBlob.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EncryptedBlob message.
         * @function verify
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EncryptedBlob.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.encType != null && message.hasOwnProperty("encType"))
                switch (message.encType) {
                default:
                    return "encType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.encData != null && message.hasOwnProperty("encData"))
                if (!(message.encData && typeof message.encData.length === "number" || $util.isString(message.encData)))
                    return "encData: buffer expected";
            if (message.encMetadata != null && message.hasOwnProperty("encMetadata"))
                if (!(message.encMetadata && typeof message.encMetadata.length === "number" || $util.isString(message.encMetadata)))
                    return "encMetadata: buffer expected";
            if (message.compressionType != null && message.hasOwnProperty("compressionType"))
                switch (message.compressionType) {
                default:
                    return "compressionType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates an EncryptedBlob message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {objectenc.EncryptedBlob} EncryptedBlob
         */
        EncryptedBlob.fromObject = function fromObject(object) {
            if (object instanceof $root.objectenc.EncryptedBlob)
                return object;
            var message = new $root.objectenc.EncryptedBlob();
            switch (object.encType) {
            case "EncryptionType_UNENCRYPTED":
            case 0:
                message.encType = 0;
                break;
            case "EncryptionType_AES":
            case 1:
                message.encType = 1;
                break;
            case "EncryptionType_SECRET_BOX":
            case 2:
                message.encType = 2;
                break;
            }
            if (object.encData != null)
                if (typeof object.encData === "string")
                    $util.base64.decode(object.encData, message.encData = $util.newBuffer($util.base64.length(object.encData)), 0);
                else if (object.encData.length)
                    message.encData = object.encData;
            if (object.encMetadata != null)
                if (typeof object.encMetadata === "string")
                    $util.base64.decode(object.encMetadata, message.encMetadata = $util.newBuffer($util.base64.length(object.encMetadata)), 0);
                else if (object.encMetadata.length)
                    message.encMetadata = object.encMetadata;
            switch (object.compressionType) {
            case "CompressionType_UNCOMPRESSED":
            case 0:
                message.compressionType = 0;
                break;
            case "CompressionType_SNAPPY":
            case 1:
                message.compressionType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an EncryptedBlob message. Also converts values to other types if specified.
         * @function toObject
         * @memberof objectenc.EncryptedBlob
         * @static
         * @param {objectenc.EncryptedBlob} message EncryptedBlob
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EncryptedBlob.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.encType = options.enums === String ? "EncryptionType_UNENCRYPTED" : 0;
                object.encData = options.bytes === String ? "" : [];
                object.encMetadata = options.bytes === String ? "" : [];
                object.compressionType = options.enums === String ? "CompressionType_UNCOMPRESSED" : 0;
            }
            if (message.encType != null && message.hasOwnProperty("encType"))
                object.encType = options.enums === String ? $root.objectenc.EncryptionType[message.encType] : message.encType;
            if (message.encData != null && message.hasOwnProperty("encData"))
                object.encData = options.bytes === String ? $util.base64.encode(message.encData, 0, message.encData.length) : options.bytes === Array ? Array.prototype.slice.call(message.encData) : message.encData;
            if (message.encMetadata != null && message.hasOwnProperty("encMetadata"))
                object.encMetadata = options.bytes === String ? $util.base64.encode(message.encMetadata, 0, message.encMetadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.encMetadata) : message.encMetadata;
            if (message.compressionType != null && message.hasOwnProperty("compressionType"))
                object.compressionType = options.enums === String ? $root.objectenc.CompressionType[message.compressionType] : message.compressionType;
            return object;
        };

        /**
         * Converts this EncryptedBlob to JSON.
         * @function toJSON
         * @memberof objectenc.EncryptedBlob
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EncryptedBlob.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EncryptedBlob;
    })();

    /**
     * EncryptionType enum.
     * @name objectenc.EncryptionType
     * @enum {string}
     * @property {number} EncryptionType_UNENCRYPTED=0 EncryptionType_UNENCRYPTED value
     * @property {number} EncryptionType_AES=1 EncryptionType_AES value
     * @property {number} EncryptionType_SECRET_BOX=2 EncryptionType_SECRET_BOX value
     */
    objectenc.EncryptionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EncryptionType_UNENCRYPTED"] = 0;
        values[valuesById[1] = "EncryptionType_AES"] = 1;
        values[valuesById[2] = "EncryptionType_SECRET_BOX"] = 2;
        return values;
    })();

    /**
     * CompressionType enum.
     * @name objectenc.CompressionType
     * @enum {string}
     * @property {number} CompressionType_UNCOMPRESSED=0 CompressionType_UNCOMPRESSED value
     * @property {number} CompressionType_SNAPPY=1 CompressionType_SNAPPY value
     */
    objectenc.CompressionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CompressionType_UNCOMPRESSED"] = 0;
        values[valuesById[1] = "CompressionType_SNAPPY"] = 1;
        return values;
    })();

    return objectenc;
})();

$root.objectsig = (function() {

    /**
     * Namespace objectsig.
     * @exports objectsig
     * @namespace
     */
    var objectsig = {};

    objectsig.Signature = (function() {

        /**
         * Properties of a Signature.
         * @memberof objectsig
         * @interface ISignature
         * @property {Uint8Array|null} [keyMultihash] Signature keyMultihash
         * @property {Uint8Array|null} [signature] Signature signature
         */

        /**
         * Constructs a new Signature.
         * @memberof objectsig
         * @classdesc Represents a Signature.
         * @implements ISignature
         * @constructor
         * @param {objectsig.ISignature=} [properties] Properties to set
         */
        function Signature(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Signature keyMultihash.
         * @member {Uint8Array} keyMultihash
         * @memberof objectsig.Signature
         * @instance
         */
        Signature.prototype.keyMultihash = $util.newBuffer([]);

        /**
         * Signature signature.
         * @member {Uint8Array} signature
         * @memberof objectsig.Signature
         * @instance
         */
        Signature.prototype.signature = $util.newBuffer([]);

        /**
         * Creates a new Signature instance using the specified properties.
         * @function create
         * @memberof objectsig.Signature
         * @static
         * @param {objectsig.ISignature=} [properties] Properties to set
         * @returns {objectsig.Signature} Signature instance
         */
        Signature.create = function create(properties) {
            return new Signature(properties);
        };

        /**
         * Encodes the specified Signature message. Does not implicitly {@link objectsig.Signature.verify|verify} messages.
         * @function encode
         * @memberof objectsig.Signature
         * @static
         * @param {objectsig.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keyMultihash != null && message.hasOwnProperty("keyMultihash"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.keyMultihash);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified Signature message, length delimited. Does not implicitly {@link objectsig.Signature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof objectsig.Signature
         * @static
         * @param {objectsig.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Signature message from the specified reader or buffer.
         * @function decode
         * @memberof objectsig.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {objectsig.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.objectsig.Signature();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.keyMultihash = reader.bytes();
                    break;
                case 3:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Signature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof objectsig.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {objectsig.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Signature message.
         * @function verify
         * @memberof objectsig.Signature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Signature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keyMultihash != null && message.hasOwnProperty("keyMultihash"))
                if (!(message.keyMultihash && typeof message.keyMultihash.length === "number" || $util.isString(message.keyMultihash)))
                    return "keyMultihash: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };

        /**
         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof objectsig.Signature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {objectsig.Signature} Signature
         */
        Signature.fromObject = function fromObject(object) {
            if (object instanceof $root.objectsig.Signature)
                return object;
            var message = new $root.objectsig.Signature();
            if (object.keyMultihash != null)
                if (typeof object.keyMultihash === "string")
                    $util.base64.decode(object.keyMultihash, message.keyMultihash = $util.newBuffer($util.base64.length(object.keyMultihash)), 0);
                else if (object.keyMultihash.length)
                    message.keyMultihash = object.keyMultihash;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a Signature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof objectsig.Signature
         * @static
         * @param {objectsig.Signature} message Signature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Signature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.keyMultihash = options.bytes === String ? "" : [];
                object.signature = options.bytes === String ? "" : [];
            }
            if (message.keyMultihash != null && message.hasOwnProperty("keyMultihash"))
                object.keyMultihash = options.bytes === String ? $util.base64.encode(message.keyMultihash, 0, message.keyMultihash.length) : options.bytes === Array ? Array.prototype.slice.call(message.keyMultihash) : message.keyMultihash;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this Signature to JSON.
         * @function toJSON
         * @memberof objectsig.Signature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Signature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Signature;
    })();

    return objectsig;
})();

module.exports = $root;
