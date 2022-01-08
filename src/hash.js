const { createHash } = require("crypto");

function hash(plainText) {
	return createHash("sha256").update(plainText).digest("hex");
}

module.exports = {
	hash,
};
