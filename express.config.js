'use strict'

// Node Middleware:
const express = require('express');
const expressserver = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

// Express Configuration:
expressserver.use(logger('dev'));
expressserver.use(bodyParser.json());
expressserver.use(bodyParser.urlencoded({ extended: false }));
expressserver.use(cookieParser());

// Static Files [Angular2 Files]:
// expressserver.use(express.static(path.join(__dirname,'build')));
expressserver.use(express.static(path.join(__dirname,'dist')));

// Routes
expressserver.use('/',require('./routes/static'));
// expressserver.use('/api', require('./routes/api'));

module.exports = expressserver;
