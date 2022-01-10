const { randomBytes } = require("crypto");

const secret = "Hello World!";
let message = "";
let key = "";
const { hash } = require("./hash");
console.log(hash(secret));

const { hashWithSalt, match } = require("./salt");
const originalHash = hashWithSalt(secret);
console.log(match(originalHash, secret));

const { hmac } = require("./hmac");
key = "password";
message = "Hello Everyone!!";
const hash1 = hmac(message, key);
const hash2 = hmac(message, "123");
console.log(hash1, hash2, hash1 === hash2);

const { encrypt, decrypt } = require("./symmetric-encryption");
message = "hello there!!";
key = randomBytes(32);
const iv = randomBytes(16);
encMessage = encrypt(message, key, iv);
decMessage = decrypt(encMessage, key, iv);
console.log(decMessage === message);

// Asymmetric Key Crypto Example
const asymmetric = require("./asymmetric-encryption");
const { publicKey, privateKey } = asymmetric.generateKeyPairs();
plaintext = "hello there again!!";
ciphertext = asymmetric.encrypt(plaintext, publicKey);
samePlaintext = asymmetric.decrypt(ciphertext, privateKey);
console.log(plaintext === samePlaintext);

const { sign, verify } = require("./signing");
const signature = sign(message, privateKey);
console.log("Is signature valid", verify(message, signature, publicKey));
