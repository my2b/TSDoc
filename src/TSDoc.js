"use strict";
const Generator_1 = require("./modules/Generator");
class TSDoc {
    constructor() {
        new Generator_1.Generator()
            .setArguments(process.argv)
            .chooseAction()
            .callAction()
            .returnResult();
    }
}
new TSDoc();
