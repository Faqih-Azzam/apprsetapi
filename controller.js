'use strict';

var respone = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    respone.ok("Aplikasi berjalan lancar!!")
};