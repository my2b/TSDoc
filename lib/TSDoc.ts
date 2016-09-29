/// <reference types="node" />
import {ArgumentsParser} from "./modules/ArgumentsParser";

export interface TSDocArguments {

}

interface TSDocInterface {
    arguments: TSDocArguments;
}

class TSDoc implements TSDocInterface {

    public arguments:TSDocArguments = {};

    constructor(){
        this.arguments = new ArgumentsParser(process.argv).parse();
    }
}

new TSDoc();
