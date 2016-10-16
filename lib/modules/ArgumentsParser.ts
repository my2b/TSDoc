/// <reference types="argv" />
/// <reference types="node" />

import argv = require('argv');

type args = {
    targets: string[],
    options: {
        [key: string]: any
    }
};

type helpOption = {
    name: string,
    type: string,
    short?: string,
    description?: string,
    example?: string
};

interface ArgumentsParserInterface {
    parsedArgs: args;
}

export default class ArgumentsParser implements ArgumentsParserInterface {

    private args: args;
    private pkg: JSON = require('../../package.json');
    private options: helpOption[] = [
        {
            name: `out`,
            short: `o`,
            type: `path`,
            description: `Path to the input file/directory with TS files`,
            example: `\`tsdoc --out path\/to\/project\``
        }
    ];

    public get parsedArgs(): args {
        return this.args;
    }

    public set parsedArgs(customArgs: args) {
        this.args = customArgs;
    }

    constructor(){
        this.args = argv
            .option(this.options)
            .version(this.pkg['version'])
            .run();
    }
}