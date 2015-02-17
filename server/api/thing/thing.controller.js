/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var fs = require('fs');
var filePath =  '/app/bubbles.json'; // for heroku
// var filePath =  './bubbles.json'; //for localhost
exports.index = function(req, res) {
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err, 'error');
    }
    // console.log(data);
    return res.json(JSON.parse(data));

  });
};


