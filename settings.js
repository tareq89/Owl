'use strict';
require('dotenv').config({silent: true});
module.exports = {
	port: process.env.PORT || 3000,
	env: process.env.ENV || 'development'
}
