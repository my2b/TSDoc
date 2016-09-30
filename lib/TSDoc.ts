/// <reference types="node" />
import ArgumentsParser from "./modules/ArgumentsParser";

export interface TSDocArguments {
    out?: string[],
    version?: undefined,
    help?: undefined
}

interface TSDocInterface {
    arguments: TSDocArguments;
}

class TSDoc implements TSDocInterface {

    public arguments:TSDocArguments = {};

    constructor(){
        try {
            this.arguments = new ArgumentsParser(process.argv).parse();
        } catch (e){
            console.error(e);
        }
    }
}

new TSDoc();
