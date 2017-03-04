'use strict'

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');

const server = new Hapi.Server();
server.connection({ port : Settings.port });

server.route({
	method: 'GET',
	path: '/',
	handler: (request, reply) => {
		reply('Hallo Wolrd!');
	}
});

server.start((err) => {
	Hoek.assert(!err, err);
	console.log(`Server running at: ${server.info.uri}`);
});
