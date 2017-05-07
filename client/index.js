'use strict';

const mqtt = require('mqtt')

const mqttBroker = `mqtt://${process.env.MQTT_BROKER}`;

console.log(`Connecting to MQTT broker ${mqttBroker}`);
const client  = mqtt.connect(mqttBroker);

client.on('connect', function () {
	console.log(`Connected...`);
	client.subscribe('ping')
})

client.on('message', function (topic, message) {
	// message is Buffer
	console.log(message.toString());
})
