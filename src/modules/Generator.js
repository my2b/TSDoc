"use strict";
const ArgumentsParser_1 = require("./ArgumentsParser");
const ActionChooser_1 = require("./ActionChooser");
class Generator {
    constructor() {
    }
    setArguments(args) {
        this.args = new ArgumentsParser_1.ArgumentsParser(args).parse();
        return this;
    }
    chooseAction() {
        this.actionName = new ActionChooser_1.default(this.args).choose();
        return this;
    }
    callAction() {
        return this;
    }
    returnResult() {
        return this;
    }
}
exports.Generator = Generator;
