/*
	Symmetric-key Cryptography
	shared secret key

	Encryption
	plain text  -----> Cipher + secret key -------> cipher text

	Decryption
	cipher text -----> cipher + secret key -------> plain text

*/

const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

function encrypt(plainText, secretKey, iv) {
	const cipher = createCipheriv("aes256", secretKey, iv);
	cipher.update(plainText, "utf8", "hex");
	return cipher.final("hex");
}

function decrypt(cipherText, secretKey, iv) {
	const cipher = createDecipheriv("aes256", secretKey, iv);
	cipher.update(cipherText, "hex", "utf8");
	return cipher.final("utf8");
}

module.exports = {
	encrypt,
	decrypt,
};
