/*
	Asymmetric-key Cryptography

	Encryption
	plain text  ------> cipher + public key  -------> cipher text
	
	Decryption
	cipher text ------> cipher + private key -------> plain text

*/

const {
	generateKeyPairSync,
	publicEncrypt,
	privateDecrypt,
} = require("crypto");

function generateKeyPairs() {
	const { privateKey, publicKey } = generateKeyPairSync("rsa", {
		modulusLength: 2048,
		publicKeyEncoding: {
			type: "spki",
			format: "pem",
		},
		privateKeyEncoding: {
			type: "pkcs8",
			format: "pem",
			// cipher: "aes-256-cbc",
			// passphrase: 'secret!!'
		},
	});

	return {
		privateKey,
		publicKey,
	};
}

function encrypt(plainText, publicKey) {
	return publicEncrypt(publicKey, Buffer.from(plainText)).toString("hex");
}

function decrypt(cipherText, privateKey) {
	return privateDecrypt(privateKey, Buffer.from(cipherText, "hex")).toString(
		"utf8"
	);
}

module.exports = {
	generateKeyPairs,
	encrypt,
	decrypt,
};
