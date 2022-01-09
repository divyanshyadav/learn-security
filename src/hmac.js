/*
	Hash bases message authentication code(MAC)

	* MAC uses keyed hash function to create digest.

*/
const { createHmac } = require("crypto");

function hmac(message, key) {
	return createHmac("sha256", key).update(message).digest("hex");
}

module.exports = {
	hmac,
};
