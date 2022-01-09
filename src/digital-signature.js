const { createSign, createVerify } = require("crypto");

function sign(plainText, privateKey) {
	const signer = createSign("rsa-sha256");
	signer.update(plainText);

	const signature = signer.sign(privateKey, "hex");
	return signature;
}

function verify(plainText, signature, publicKey) {
	const verifier = createVerify("rsa-sha256");
	verifier.update(plainText);

	return verifier.verify(publicKey, signature, "hex");
}

module.exports = {
	sign,
	verify,
};
