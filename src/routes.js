"use strict";
exports.__esModule = true;
var express_1 = require("express");
//import usercontroller from '../src/usercontroller';
var routes = express_1.Router();
routes.get('/', function (request, response) {
    return response.json('a');
});
exports["default"] = routes;
