/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.mock = (function() {

    /**
     * Namespace mock.
     * @exports mock
     * @namespace
     */
    var mock = {};

    mock.MockObject = (function() {

        /**
         * Properties of a MockObject.
         * @memberof mock
         * @interface IMockObject
         * @property {string|null} [testField] MockObject testField
         */

        /**
         * Constructs a new MockObject.
         * @memberof mock
         * @classdesc Represents a MockObject.
         * @implements IMockObject
         * @constructor
         * @param {mock.IMockObject=} [properties] Properties to set
         */
        function MockObject(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MockObject testField.
         * @member {string} testField
         * @memberof mock.MockObject
         * @instance
         */
        MockObject.prototype.testField = "";

        /**
         * Creates a new MockObject instance using the specified properties.
         * @function create
         * @memberof mock.MockObject
         * @static
         * @param {mock.IMockObject=} [properties] Properties to set
         * @returns {mock.MockObject} MockObject instance
         */
        MockObject.create = function create(properties) {
            return new MockObject(properties);
        };

        /**
         * Encodes the specified MockObject message. Does not implicitly {@link mock.MockObject.verify|verify} messages.
         * @function encode
         * @memberof mock.MockObject
         * @static
         * @param {mock.IMockObject} message MockObject message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MockObject.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.testField != null && message.hasOwnProperty("testField"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.testField);
            return writer;
        };

        /**
         * Encodes the specified MockObject message, length delimited. Does not implicitly {@link mock.MockObject.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mock.MockObject
         * @static
         * @param {mock.IMockObject} message MockObject message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MockObject.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MockObject message from the specified reader or buffer.
         * @function decode
         * @memberof mock.MockObject
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mock.MockObject} MockObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MockObject.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mock.MockObject();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.testField = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MockObject message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mock.MockObject
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mock.MockObject} MockObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MockObject.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MockObject message.
         * @function verify
         * @memberof mock.MockObject
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MockObject.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.testField != null && message.hasOwnProperty("testField"))
                if (!$util.isString(message.testField))
                    return "testField: string expected";
            return null;
        };

        /**
         * Creates a MockObject message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mock.MockObject
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mock.MockObject} MockObject
         */
        MockObject.fromObject = function fromObject(object) {
            if (object instanceof $root.mock.MockObject)
                return object;
            var message = new $root.mock.MockObject();
            if (object.testField != null)
                message.testField = String(object.testField);
            return message;
        };

        /**
         * Creates a plain object from a MockObject message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mock.MockObject
         * @static
         * @param {mock.MockObject} message MockObject
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MockObject.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.testField = "";
            if (message.testField != null && message.hasOwnProperty("testField"))
                object.testField = message.testField;
            return object;
        };

        /**
         * Converts this MockObject to JSON.
         * @function toJSON
         * @memberof mock.MockObject
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MockObject.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MockObject;
    })();

    return mock;
})();

module.exports = $root;
