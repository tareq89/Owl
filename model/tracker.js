'use strict';
const Joi = require('joi');
const MongoModels = require('mongo-models');
const Boom = require('boom');

class Tracker extends MongoModels {

	static getAll (callback) {
		this.find({}, (err, docs) => {
			if (err) {
				var boom = Boom.internal('Mongodb Exception: ');
				boom.output.payload.details = err;
				callback(boom);
			} else {
				callback(docs);
			}
		})
	}

	static update (tracker, callback){
		var validated = Tracker.validate(tracker);        
        if (validated.error) {            
            var boom = Boom.badRequest('Validation err: ');
            boom.output.payload.details = validated.error.details;
            callback(boom);
        } else {
        	this.updateOne({TrackerId: tracker.TrackerId}, tracker, { upsert: true }, (err, docs)=> {			
				if (err) {
					var boom = Boom.internal('Mongodb Exception: ');
					boom.output.payload.details = err;
					callback(boom);
					return;
				} else {
					callback(null, docs);
				}
			});
        }		
	}
	static validate (tracker) {
		return Joi.validate(tracker, Tracker.schema);
	};	
}

Tracker.collection = 'Ping';

Tracker.schema = Joi.object().keys({
	TrackerId: Joi.string(),
	Name: Joi.string().required(),
	CreateTime: Joi.date().iso(),
	TrackerType: Joi.string(),
	Point: Joi.object().keys({
		type: Joi.string(),
		coordinates: Joi.array().length(2)
	})
});

module.exports = Tracker;