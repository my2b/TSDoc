/// <reference types="lodash" />
import * as _ from "lodash"
import {TSDocArguments} from "../TSDoc";

const ARGUMENTS_PREFIX:string = '--';
export const TSDOC_ARGUMENTS:Object = {
    out: '--out',
    help: '--help',
    version: '--version'
};

interface ArgumentsParserInterface {
    parse():any;
}

export class ArgumentsParser implements ArgumentsParserInterface {

    public parse():TSDocArguments {
        let currentArg:string;

        return _(this.argv)
            .transform((preparedArgs:TSDocArguments, argPart:string) => {
                let currentArgValue:string|string[] = '';

                if(_.startsWith(argPart, ARGUMENTS_PREFIX)){

                    if(!_.includes(_.values(TSDOC_ARGUMENTS), argPart)){
                        // TODO: make more verbose errors and handle them
                        throw `Unexpected argument ${argPart}`;
                    }

                    currentArg = argPart;
                } else if (!_.isEmpty(preparedArgs)){
                    currentArgValue = <string|string[]>_.get(preparedArgs, currentArg) || argPart;

                    if(_.isArray(currentArgValue)){
                        currentArgValue.push(argPart);
                    } else {
                        currentArgValue = [currentArgValue];
                    }
                }

                if(currentArg){
                    _.set(preparedArgs, currentArg, currentArgValue);
                }

                return preparedArgs;
            }, {})
            .value();
    }

    constructor(private argv:string[]){

    }
}
