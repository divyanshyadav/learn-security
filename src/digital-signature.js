const { createSign, createVerify } = require("crypto");

function sign(message, privateKey) {
	const signer = createSign("rsa-sha256");
	signer.update(message);

	const signature = signer.sign(privateKey, "hex");
	return signature;
}

function verify(message, signature, publicKey) {
	const verifier = createVerify("rsa-sha256");
	verifier.update(message);

	return verifier.verify(publicKey, signature, "hex");
}

module.exports = {
	sign,
	verify,
};
