const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

function encrypt(message, key, iv) {
	const cipher = createCipheriv("aes256", key, iv);
	cipher.update(message, "utf8", "hex");
	return cipher.final("hex");
}

function decrypt(message, key, iv) {
	const cipher = createDecipheriv("aes256", key, iv);
	cipher.update(message, "hex", "utf8");
	return cipher.final("utf8");
}

module.exports = {
	encrypt,
	decrypt,
};
