var express = require('express');
var app = express();

var http = require('http'),
    fs = require('fs');

app.get('/', function(req, res){
    fs.readFile('a.html',"utf-8",function (err, data){
        res.jsonp({ error: data});
        res.send();
    });
});

app.listen(8080);