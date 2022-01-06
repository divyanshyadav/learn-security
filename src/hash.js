const { createHash } = require("crypto");

function hash(data) {
	return createHash("sha256").update(data).digest("hex");
}

module.exports = {
	hash,
};
