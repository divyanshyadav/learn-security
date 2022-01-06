const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

function hashWithSalt(data) {
	const salt = randomBytes(16).toString("hex");
	const hash = scryptSync(data, salt, 64).toString("hex");

	return `${salt}:${hash}`;
}

function match(hashWithSalt, data) {
	const [salt, originalHash] = hashWithSalt.split(":");
	const hash = scryptSync(data, salt, 64);

	const originalHashBuffer = Buffer.from(originalHash, "hex");
	return timingSafeEqual(originalHashBuffer, hash);
}

module.exports = {
	hashWithSalt,
	match,
};
