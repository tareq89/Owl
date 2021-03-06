'use strict'

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');
const Routes = require('./lib/routes');
const MongoDB = require('hapi-mongodb');

const server = new Hapi.Server();
server.connection({ port : Settings.port });

const plugins = [
	{ 
		register: MongoDB, 
		options: Settings[Settings.env]
	}
]

server.register(plugins, (err) => {
	if (err) { 
		console.log('Failed to load plugin', err);
	}

	server.route(Routes);
	server.start((err) => {
		Hoek.assert(!err, err);
		console.log(`Server running at: ${server.info.uri}`);
	});
});