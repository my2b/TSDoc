"use strict";
var ArgumentsParser = (function () {
    function ArgumentsParser(argv) {
        this.argv = argv;
    }
    ArgumentsParser.prototype.parse = function () {
        console.log(this.argv);
        return {};
    };
    return ArgumentsParser;
}());
exports.ArgumentsParser = ArgumentsParser;
