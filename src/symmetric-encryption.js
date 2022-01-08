/*
	Symmetric-key Cryptography
	shared secret key

	Encryption
	plaintext  -----> Cipher + secret key -------> ciphertext

	Decryption
	ciphertext -----> cipher + secret key -------> plaintext

	ciphers: DES, AES(128 bits, 192 bits, 256bits)
*/

const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

function encrypt(plaintext, secretKey, iv) {
	const cipher = createCipheriv("aes256", secretKey, iv);
	cipher.update(plaintext, "utf8", "hex");
	return cipher.final("hex");
}

function decrypt(ciphertext, secretKey, iv) {
	const cipher = createDecipheriv("aes256", secretKey, iv);
	cipher.update(ciphertext, "hex", "utf8");
	return cipher.final("utf8");
}

module.exports = {
	encrypt,
	decrypt,
};
