const fs = require("fs");
const https = require("https");
const express = require("express");
const {
	generateCertificateAndSave,
	generateKeyPairsAndSave,
} = require("./cert-utils");

if (!fs.existsSync("certs")) {
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

sslServer.listen(443, () => {
	console.log("Listening on port 443");
});
