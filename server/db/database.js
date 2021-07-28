const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const db= new Sequelize(`postgres://localhost:5432/${pkg.name}`);
console.log(chalk.yellow(`Opening database connection to ${pkg.name}`));

module.exports= db;