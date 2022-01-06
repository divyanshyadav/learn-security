// Hash bases message authentication code

const { createHmac } = require("crypto");

function hmac(message, key) {
	return createHmac("sha256", key).update(message).digest("hex");
}

module.exports = {
	hmac,
};
