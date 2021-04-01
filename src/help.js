const chalk = require("chalk");

const menus = {
    main: `
    ${chalk.greenBright('tigdum [command] <options>')} OR ${chalk.greenBright('tigdum <options>')}
    ${chalk.greenBright('commands')} -> ${chalk.greenBright('shorthand')} -> ${chalk.greenBright('use')}
      
      ${chalk.blueBright('version')} -> ${chalk.blueBright('-v')} -> show latest version of the cli.
      ${chalk.blueBright('help')} -> ${chalk.blueBright('-h')} -> show help menu for a command.
      ${chalk.blueBright('translate')} -> ${chalk.blueBright('-t')} -> translate json to resx.

      ${chalk.greenBright('options that can be used with translate command')}

      ${chalk.blueBright('jp')} -> The path to pick json files from.
      ${chalk.blueBright('rp')} -> The path to pick resx files from, provide this if you want to replace existing translations with new ones.
      ${chalk.blueBright('op')} -> The path to dump translated files to, if not provided, will use 'rp', provide this if new files need to be generated.

      ${chalk.greenBright('options that can be used directly without command')}
      ${chalk.blueBright('--version')} -> ${chalk.blueBright('-v')} -> show latest version of the cli.
      ${chalk.blueBright('--help')} -> ${chalk.blueBright('-h')} -> show help menu for a command.
    `,

    translate: `
        e.g. ${chalk.greenBright('tigdum translate -jp "json_path" -rp "resx_path"')}
        OR ${chalk.greenBright('tigdum -t -jp "json_path" -rp "resx_path"')}

        ${chalk.blueBright('translate')} -> ${chalk.blueBright('-t')} -> translate json to resx.

        ${chalk.greenBright('options that can be used with translate command')}

      ${chalk.blueBright('jp')} -> The path to pick json files from.
      ${chalk.blueBright('rp')} -> The path to pick resx files from, provide this if you want to replace existing translations with new ones.
      ${chalk.blueBright('op')} -> The path to dump translated files to, if not provided, will use 'rp', provide this if new files need to be generated.
    `,

    version: `
        e.g. ${chalk.greenBright('tigdum version')} OR ${chalk.greenBright('tigdum --version')} OR ${chalk.greenBright('tigdum -v')}
        
        Shows the latest version of the cli.
    `,

    help: `
        e.g. ${chalk.greenBright('tigdum help')} ${chalk.greenBright('tigdum --help')} OR ${chalk.greenBright('tigdum -h')}
        
        ${chalk.blueBright('Shows the help menu which you are seeing right now.')}
    `
}

module.exports = function help(args) {
    console.log(args);
    const subCmd = args[0] === 'help' || args[0] === 'h'
        ? args[1]
        : args[0]
    console.log(menus[subCmd] || menus.main)
}