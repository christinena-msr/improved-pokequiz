<<<<<<< HEAD
"use strict";
const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname + '../config/config.json'))[env];
console.log(config);

if (config.use_env_variable) {
  const sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  const sequelize = new Sequelize(config.database, config.username, config.password, config);
}
// const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

fs
	.readdirSync(__dirname)
	.filter(function(file) {
		return (file.indexOf(".") !== 0) && (file !== "index.js");
	})
	.forEach(function(file) {
		let model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(function(modelName) {
	if ("associate" in db[modelName]) db[modelName].associate(db);
=======
'use strict';

var fs        = require('fs');
var path      = require('path');
var { Sequelize } = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    // error says "sequelize.import is not a function" (but it is)
    var model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
>>>>>>> backend
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

<<<<<<< HEAD
module.exports = db;
=======

module.exports = db;
>>>>>>> backend
