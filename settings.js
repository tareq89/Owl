'use strict';
require('dotenv').config({silent: true});
module.exports = {
	port: process.env.PORT || 3000,
	env: process.env.ENV || 'development',
	development: {
        dialect: 'mongo',
            connectionString: 'mongodb://gofetch.cloudapp.net:27017/Owl'
    }
}
