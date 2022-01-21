const fs = require("fs");
const path = require("path");
const forge = require("node-forge");

const { generateKeyPairs } = require("../asymmetric-encryption");

function generateKeyPairsAndSave(location) {
	const { publicKey, privateKey } = generateKeyPairs();
	fs.writeFileSync(path.join(location, "public.pem"), publicKey);
	fs.writeFileSync(path.join(location, "private.pem"), privateKey);
}

function generateCertificateAndSave(location, publicKeyPath, privateKeyPath) {
	const cert = forge.pki.createCertificate();
	const publicKey = forge.pki.publicKeyFromPem(fs.readFileSync(publicKeyPath));
	const privateKey = forge.pki.privateKeyFromPem(
		fs.readFileSync(privateKeyPath)
	);

	cert.publicKey = publicKey;
	cert.serialNumber = "01";
	cert.validity.notBefore = new Date();
	cert.validity.notAfter = new Date();
	cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);

	const attrs = [
		{
			name: "commonName",
			value: "example.net",
		},
		{
			name: "countryName",
			value: "US",
		},
		{
			shortName: "ST",
			value: "Virginia",
		},
		{
			name: "localityName",
			value: "Blacksburg",
		},
		{
			name: "organizationName",
			value: "Test",
		},
		{
			shortName: "OU",
			value: "Test",
		},
	];

	cert.setSubject(attrs);
	cert.setIssuer(attrs);

	cert.sign(privateKey, forge.md.sha256.create());
	const certInPem = forge.pki.certificateToPem(cert);
	fs.writeFileSync(path.join(location, "cert.pem"), certInPem);
}

module.exports = {
	generateKeyPairsAndSave,
	generateCertificateAndSave,
};
