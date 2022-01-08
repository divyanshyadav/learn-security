/*
	Asymmetric-key Cryptography or Public key Cryptography

	Encryption
	plaintext  ------> cipher + public key  -------> ciphertext
	
	Decryption
	ciphertext ------> cipher + private key -------> plaintext

	ciphers: RSA, Diffie-Hellman

	RSA
	RSA can be used to encrypt and decrypt actual messages, it is
	very slow if the message is long. RSA, therefore, is useful for
	short messages, encryption or decrypting symmetric key across 
	or signing certs
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

function encrypt(plaintext, publicKey) {
	return publicEncrypt(publicKey, Buffer.from(plaintext)).toString("hex");
}

function decrypt(ciphertext, privateKey) {
	return privateDecrypt(privateKey, Buffer.from(ciphertext, "hex")).toString(
		"utf8"
	);
}

module.exports = {
	generateKeyPairs,
	encrypt,
	decrypt,
};
