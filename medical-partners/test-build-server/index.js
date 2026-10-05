require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const os = require('os');
const chalk = require('chalk');
const app = express();

const hostPort = process.env.TEST_SERVER_PORT || 3000;
const hostIP =
	process.env.TEST_SERVER_IP ||
	Object.values(os.networkInterfaces())
		.flat()
		.find((iface) => iface.family === 'IPv4' && !iface.internal).address;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../build', 'index.html')));

http.createServer(app).listen(hostPort, hostIP, () =>
	console.log(
		chalk.green.bold('Server initialized on:') +
			' ' +
			chalk.cyan(`http://${hostIP}:${hostPort}`) +
			' // ' +
			chalk.gray(new Date().toLocaleString()),
	),
);
