/// <reference types="lodash" />
import {TSDocArguments} from "../TSDoc";

interface ArgumentsParserInterface {
    parse():any;
}

export class ArgumentsParser implements ArgumentsParserInterface {

    public parse():TSDocArguments {
        console.log(this.argv);
        return {};
    }

    constructor(private argv:string[]){

    }
}
