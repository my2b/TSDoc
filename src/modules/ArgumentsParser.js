"use strict";
const argv = require('argv');
class ArgumentsParser {
    constructor() {
        this.pkg = require('../../package.json');
        this.options = [
            {
                name: `out`,
                short: `o`,
                type: `path`,
                description: `Path to the input file/directory with TS files`,
                example: `\`tsdoc --out path\/to\/project\``
            }
        ];
        this.args = argv
            .option(this.options)
            .version(this.pkg['version'])
            .run();
    }
    get parsedArgs() {
        return this.args;
    }
    set parsedArgs(customArgs) {
        this.args = customArgs;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ArgumentsParser;
