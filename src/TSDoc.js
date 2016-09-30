"use strict";
const ArgumentsParser_1 = require("./modules/ArgumentsParser");
class TSDoc {
    constructor() {
        this.arguments = {};
        try {
            this.arguments = new ArgumentsParser_1.default(process.argv).parse();
        }
        catch (e) {
            console.error(e);
        }
    }
}
new TSDoc();
