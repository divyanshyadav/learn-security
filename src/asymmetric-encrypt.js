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

function encrypt(message, publicKey) {
	return publicEncrypt(publicKey, Buffer.from(message)).toString("hex");
}

function decrypt(message, privateKey) {
	return privateDecrypt(privateKey, Buffer.from(message, "hex")).toString(
		"utf8"
	);
}

module.exports = {
	generateKeyPairs,
	encrypt,
	decrypt,
};
