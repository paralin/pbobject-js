import { objectenc, ResourceResolverFunc } from '@aperturerobotics/objectenc'

// IEncryptionConfig sets encryption settings.
export interface IEncryptionConfig {
    // EncryptionType is the kind of encryption to use, default is unencrypted.
    // Only used when encrypting - when decrypting the encoded method is respected.
    encryptionType?: objectenc.EncryptionType
    // ResourceLookup if set will be used to look up necessary keys and other data.
    resourceLookup?: ResourceResolverFunc
    // hashCode is the code of the hashing algorithm to use, defaults to sha256
    hashCode?: number
    // signerKeys are the keys to sign the buffer with when making an object wrapper.
    signerKeys?: any[]
}
