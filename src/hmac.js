// Hash bases message authentication code

const { createHmac } = require("crypto");

function hmac(plainText, key) {
	return createHmac("sha256", key).update(plainText).digest("hex");
}

module.exports = {
	hmac,
};
