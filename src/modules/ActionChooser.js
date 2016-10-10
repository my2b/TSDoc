"use strict";
const _ = require("lodash");
const ArgumentsParser_1 = require("./ArgumentsParser");
class ActionChooser {
    constructor(parsedArgs) {
        this.parsedArgs = parsedArgs;
    }
    choose() {
        let resultAction;
        _.forEach(this.parsedArgs, (values, actionName) => {
            if (_.includes(ArgumentsParser_1.TSDOC_SINGLE_ARGS, actionName)) {
                resultAction = { [actionName]: values };
                return false;
            }
        });
        return resultAction || this.parsedArgs;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ActionChooser;
