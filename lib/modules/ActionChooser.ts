/// <reference types="lodash" />
import * as _ from "lodash"
import {TSDocArguments, TSDOC_SINGLE_ARGS} from "./ArgumentsParser";

interface ActionChooserInterface {
    choose(): TSDocArguments;
}

export default class ActionChooser implements ActionChooserInterface {

    public choose(): TSDocArguments {
        let resultAction:TSDocArguments;

        _.forEach(this.parsedArgs, (values:string|string[], actionName: string) => {
            if(_.includes(TSDOC_SINGLE_ARGS, actionName)){
                resultAction = {[actionName] : values};
                return false;
            }
        });

        return resultAction || this.parsedArgs;
    }

    constructor(private parsedArgs: TSDocArguments){

    }
}