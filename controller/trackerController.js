'use strict';
const Boom = require('boom');
const Tracker = require('../model/tracker')

module.exports = {

	Welcome: (request, reply) => {
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


    Post: (request, reply) => {
        const tracker = request.payload;
        console.log(tracker);
        Tracker.update(tracker, (err, response)=>{
            if (err) {
                reply(err);
            } else {
                reply(response)
            }
        });        
    }

}