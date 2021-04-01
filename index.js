#!/usr/bin/env node

const minimist = require("minimist");
const chalk = require("chalk");
const translate = require("./src/translate");
const help = require("./src/help");
const version = require("./src/version");
const CONST = require("./src/constants");

let { _: [command, ...restCommands], ...options } = minimist(process.argv.slice(2));

if (!command) {
    if (options.v || options.version) {
        command = CONST.COMMAND.VERSION;
    }
    else if (options.h || options.help) {
        command = CONST.COMMAND.HELP;
    }
    else if (options.t) {
        command = CONST.COMMAND.TRANSLATE;
    }
    else {
        throw "Please provide a command... see tigdum --help";
    }
}

switch (command) {
    case CONST.COMMAND.TRANSLATE:
        console.log(`${chalk.greenBright('tigdum running...')}`);
        translate(options);
        break;
    case CONST.COMMAND.VERSION:
        version();
        break;
    case CONST.COMMAND.HELP:
        help([command, ...restCommands]);
        break;
    default:
        console.log(`${chalk.redBright('Invalid command... see tigdum --help')}`);
        break;
}
