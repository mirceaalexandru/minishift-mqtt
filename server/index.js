'use strict';

const mqtt = require('mqtt');
const restify = require('restify');
const stringify = require('fast-safe-stringify');

const mqttBroker = `mqtt://${process.env.MQTT_BROKER || 'localhost'}`;

console.log(`Connecting to MQTT broker ${mqttBroker}`);
const client  = mqtt.connect(mqttBroker);

function ping(req, res, next) {
	console.log('ping');
	const message = {
		code: 'pong',
		timestamp: new Date()
	};

	client.publish('ping', `Sent message: ${stringify(message)}`);

	res.json(message);
	next();
}

function start() {
	console.log(`Connected to MQTT broker...`);
	const port = process.env.MOCK_SERVER_PORT || 3050;
	console.log(`Listen on ${port}`);
	server.listen(port);
}

var server = restify.createServer({
	name: 'Mock Server'
});

server.get('/ping', ping);
client.on('connect', start);
