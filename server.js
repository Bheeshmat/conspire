#!/usr/bin/env node

var http = require('http');
var debug = require('debug')('App:server');
// Module containing the ExpressJS configurations
var app = require('./express.config.js');

var port = process.env.PORT || '5002';

var server = http.createServer(app);
server.listen(port);
console.log('Server started on port 5002')
