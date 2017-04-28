/**
 * Created by mgab on 28/04/2017.
 */
var chalk = require('chalk');
var clear = require('clear');
var CLI = require('clui');
var figlet = require('figlet');
var inquirer = require('inquirer');
var Preferences = require('preferences');
var Spinner = CLI.Spinner;
var GitHubApi = require('github');
var _ = require('lodash');
var git = require('simple-git')();
var touch = require('touch');
var fs = require('fs');
var files = require('./lib/files');

clear();
console.log(chalk.yellow(figlet.textSync('Ginit', { horizontalLayout: 'full' })));