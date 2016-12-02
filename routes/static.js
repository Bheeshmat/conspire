'use strict'

const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/',function(req, res, next){
 fs.readFile('views/index.html', function(error,data){
          res.writeHead(200, { 'content-type': 'text/html' });
          res.end(data);
        }
      );
    }
);

module.exports = router;
