/// <reference types="lodash" />
import * as _ from "lodash"

const TSDOC_SINGLE_ARGS: string[] = ['help', 'version'];
const TSDOC_CHAIN_ARGS: string[] = ['out',];
const TSDOC_ALL_ARGS: string[] = _.concat(TSDOC_CHAIN_ARGS, TSDOC_SINGLE_ARGS);
const ARGUMENTS_PREFIX: string = '--';

export interface TSDocArguments {
    out?: string[],
    version?: undefined,
    help?: undefined
}

interface ArgumentsParserInterface {
    parse(): any;
}

export class ArgumentsParser implements ArgumentsParserInterface {

    public parse(): TSDocArguments {
        let currentArg: string,
            parsedArgs: TSDocArguments =
                _.transform(this.argv, (preparedArgs: TSDocArguments, argPart: string) => {
                    let currentArgValue: string|string[];

                    if(_.startsWith(argPart, ARGUMENTS_PREFIX)){
                        currentArg = argPart.substr(_.size(ARGUMENTS_PREFIX));

                        if(!_.includes(TSDOC_ALL_ARGS, currentArg)){
                            throw `Unexpected argument \"${argPart}\". Run \"tsdoc --help\" for help`;
                        }

                    } else if (preparedArgs){
                        currentArgValue = (<string|string[]>_.get(preparedArgs, currentArg)) || argPart;

                        if(_.isArray(currentArgValue)){
                            currentArgValue.push(argPart);
                        } else if (currentArgValue) {
                            currentArgValue = [currentArgValue];
                        }
                    }

                    if(currentArg){
                        _.set(preparedArgs, currentArg, currentArgValue);
                    }

                    return preparedArgs;
                }, {});

        if(_.isEmpty(parsedArgs)){
            throw `No parameters were passed. Run \"tsdoc --help\" for help`;
        }

        return parsedArgs;
    }

    constructor(private argv:string[]){

    }
}
