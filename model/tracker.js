'use strict';
const Joi = require('joi');
const MongoModels = require('mongo-models');

class Tracker extends MongoModels {
	static update(tracker, callback){		
		this.updateOne({TrackerId: tracker.TrackerId}, tracker, { upsert: true }, (err, docs)=> {
			if (err) {
				callback();
				return;
			} else {
				callback(null, docs[0]);
			}
		});
	}
}

Tracker.collection = 'Ping';

Tracker.schema = Joi.object().keys({
	TrackerId: Joi.string(),
	Name: Joi.string().required(),
	CreateTime: Joi.date().iso(),
	Point: Joi.object().keys({
		type: Joi.string(),
		coordinates: Joi.array().ordered(Joi.number()).length(2)
	})
});

module.exports = Tracker;