'use strict';
const Joi = require('joi');
const MongoModels = require('mongo-models');

class Tracker extends MongoModels {}

Tracker.schema = Joi.object().keys({
	TrackerId: Joi.string(),
	Name: Joi.string().required(),
	CreateTime: Joi.date().iso(),
	Point: Joi.object().keys({
		type: Joi.string(),
		coordinates: Joi.array().ordered(Joi.number().required,Joi.number().required).length(2)
	})
})