/*
	Symmetric-key Cryptography
	shared secret key

	plain text  -----> Encryption -------> cipher text
	cipher text -----> Decryption -------> plain text

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
