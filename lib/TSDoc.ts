/// <reference types="node" />
import {Generator} from "./modules/Generator";

class TSDoc {

    constructor(){
        new Generator()
            .setArguments(process.argv)
            .chooseAction()
            .callAction()
            .returnResult();
    }
}

new TSDoc();
