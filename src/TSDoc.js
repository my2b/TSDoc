"use strict";
var ArgumentsParser_1 = require("./modules/ArgumentsParser");
var TSDoc = (function () {
    function TSDoc() {
        this.arguments = {};
        this.arguments = new ArgumentsParser_1.ArgumentsParser(process.argv).parse();
    }
    return TSDoc;
}());
new TSDoc();
