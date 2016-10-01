"use strict";
const ArgumentsParser_1 = require("./ArgumentsParser");
class Generator {
    constructor() {
    }
    setArguments(args) {
        this.args = new ArgumentsParser_1.ArgumentsParser(args).parse();
        return this;
    }
    chooseAction() {
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
