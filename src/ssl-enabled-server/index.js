const fs = require("fs");
const https = require("https");
const express = require("express");

const PORT = 3443;

const {
	generateCertificateAndSave,
	generateKeyPairsAndSave,
} = require("./cert-utils");

if (!fs.existsSync("certs")) {
	console.log("Creating certs");
	fs.mkdirSync("certs");
	generateKeyPairsAndSave("certs");
	generateCertificateAndSave("certs", "certs/public.pem", "certs/private.pem");
}

const app = express();
app.get("/", (req, res) => {
	res.send("Hello World!");
});

const sslServer = https.createServer(
	{
		key: fs.readFileSync("certs/private.pem"),
		cert: fs.readFileSync("certs/cert.pem"),
	},
	app
);

sslServer.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
