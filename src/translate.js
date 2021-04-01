const fs = require("fs");
const path = require("path");
const resx = require("resx");
const chalk = require("chalk");

const langJsonData = {};
const langResxData = {};

function readJsonDirectory({ jp, rp, op }) {
    fs.readdir(jp, (err, langFileNames) => {
        const doneFiles = [];
        langFileNames.forEach(langFileName => {
            const langFilePath = path.resolve(jp, langFileName);

            fs.readFile(langFilePath, "utf8", (err, data) => {
                const splitString = langFileName.split(".");
                const langCode = splitString[0];
                langJsonData[langCode] = JSON.parse(data);
                doneFiles.push(langFileName);

                if (doneFiles.length === langFileNames.length) {
                    readResxDirectory({ rp, op }); // readJSonDirectory completed callback.
                }
            });
        });
    });
}

function readResxDirectory({ rp, op }) {
    const doneFiles = [];
    fs.readdir(rp, (err, resourceFilesNames) => {
        resourceFilesNames.forEach(resourceFileName => {
            const langFilePath = path.resolve(rp, resourceFileName);

            fs.readFile(langFilePath, "utf8", (err, xml) => {
                const splitString = resourceFileName.split(".");
                const langCode = splitString[1].toLowerCase();
                resx.resx2js(xml, (err, res) => {
                    langResxData[langCode] = res;
                    doneFiles.push(resourceFileName);

                    if (doneFiles.length === resourceFilesNames.length) {
                        writeToResxDirectory({ rp, op }); // readResxDirectory completed callback.
                    }
                });
            });
        });
    });
}

function writeToResxDirectory({ rp, op }) {
    const doneFiles = [];
    Object.keys(langJsonData).forEach(langCode => {
        Object.keys(langJsonData[langCode]).forEach(key => {
            if (!langResxData[langCode]) {
                langResxData[langCode] = {};
            }

            langResxData[langCode][key] = langJsonData[langCode][key];
        });

        resx.js2resx(langResxData[langCode], (err, res) => {
            let normalizedLangCode = langCode;
            if (langCode === "ar-sa") {
                normalizedLangCode = "ar-SA";
            }
            if (langCode === "zh-cn") {
                normalizedLangCode = "zh-Hans";
            }
            if (langCode === "en") {
                normalizedLangCode = "";
            }

            const fileName = normalizedLangCode ? `ResourceService.${normalizedLangCode}.resx` : "ResourceService.resx";
            const writeFilePath = path.resolve(op || rp, fileName);
            
            fs.writeFile(writeFilePath, res, (err) => {
                if (err) {
                    console.log(`${chalk.redBright('could not do...')}`);
                }

                doneFiles.push(writeFilePath);

                if (doneFiles.length === Object.keys(langJsonData).length) {
                    console.log(`${chalk.greenBright('translation complete...')}`);
                }
            });
        });
    });
}

function translate(args) {
    readJsonDirectory(args);
}

module.exports = translate;