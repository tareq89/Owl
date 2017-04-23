'use strict';

const TrackerController = require('../controller/trackerController');

module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: TrackerController.Welcome,
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