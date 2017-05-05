'use strict';

const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
	client.subscribe('ping')
})

client.on('message', function (topic, message) {
	// message is Buffer
	console.log(message.toString());
})
