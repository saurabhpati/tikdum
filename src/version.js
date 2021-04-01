const chalk = require("chalk");
const packageJson = require("../package.json");

module.exports = function version() {
    console.log(`${chalk.greenBright(packageJson.version)}`);
}