"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var usercontroller_1 = __importDefault(require("./usercontroller"));
var routes = express_1.Router();
routes.post('/users/create', usercontroller_1["default"].create);
routes.get('/users/index', usercontroller_1["default"].index);
routes.get('/users/index/unique', usercontroller_1["default"].listone);
exports["default"] = routes;
//# sourceMappingURL=routes.js.map