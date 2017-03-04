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







// const Hapi = require('hapi');
// const Boom = require('boom');
 
// const dbOpts = {
//     url: 'mongodb://localhost:27017/test',
//     settings: {
//         poolSize: 10
//     },
//     decorate: true
// };
 
// const server = new Hapi.Server();
 
// server.register({
//     register: require('hapi-mongodb'),
//     options: dbOpts
// }, function (err) {
//     if (err) {
//         console.error(err);
//         throw err;
//     }
 
//     server.route( {
//         method: 'GET',
//         path: '/users/{id}',
//         handler(request, reply) {
//             const db = request.mongo.db;
//             const ObjectID = request.mongo.ObjectID;
 
//             db.collection('users').findOne({  _id: new ObjectID(request.params.id) }, function (err, result) {
 
//                 if (err) {
//                     return reply(Boom.internal('Internal MongoDB error', err));
//                 }
 
//                 reply(result);
//             });
//         }
//     });
 
//     server.start(function() {
//         console.log(`Server started at ${server.info.uri}`);
//     });
// });




