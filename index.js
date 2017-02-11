var express = require('express');
var cors = require('cors');
var bodyParser = require('body-Parser');

var employeeList = require('./employeeList');
var employeeCtrl = require('./employeeCtrl');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + "/public"));

app.listen(9999, function(){
  console.log("Michael Scott is listening on 9999")
});
