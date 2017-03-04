'use strict';
const Boom = require('boom');
module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: (request, reply) => {			
			const db = request.mongo.db;
            const ObjectID = request.mongo.ObjectID;            
 
            db.collection('Ping').find({}).toArray(function (err, result) {

            	console.log("error:");
            	console.log(err);
            	console.log("result:");
            	console.log(result);

                if (err) {
                    return reply(Boom.internal('Internal MongoDB error', err));
                }

                reply(result);
            });
		},
		config: {
			description: 'welcome note!'
		}
	},
	{
		method: 'GET',
		path: '/livetrackers',
		handler: (request, reply) => {
			reply('welcome note!')
		},
		config: {
			description: 'get list of live trackers!'
		}
	},
	{
		method: 'GET',
		path: '/livetrackers/{trackerid}',
		handler: (request, reply) => {
			reply('welcome note!')
		},
		config: {
			description: 'get the mentioned live tracker by id!'
		}
	},
	{
		method: 'post',
		path: '/livetrackers',
		handler: (request, reply) => {
			reply('welcome note!')
		},
		config: {
			description: 'post a new tracker location if new tracker, or update!'
		}
	}
];