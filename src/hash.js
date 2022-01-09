/*
	message ----> Hash function -----> message digest

	* Message Digest create by a hash function is called a modification detection code (MDC)
	* MDC uses keyless hash function
*/

const { createHash } = require("crypto");

function hash(message) {
	return createHash("sha256").update(message).digest("hex");
}

module.exports = {
	hash,
};
