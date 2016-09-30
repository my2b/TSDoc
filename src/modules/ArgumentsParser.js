"use strict";
var _ = require("lodash");
var ARGUMENTS_PREFIX = '--';
exports.TSDOC_ARGUMENTS = {
    out: '--out',
    help: '--help',
    version: '--version'
};
var ArgumentsParser = (function () {
    function ArgumentsParser(argv) {
        this.argv = argv;
    }
    ArgumentsParser.prototype.parse = function () {
        var currentArg;
        return _(this.argv)
            .transform(function (preparedArgs, argPart) {
            var currentArgValue = '';
            if (_.startsWith(argPart, ARGUMENTS_PREFIX)) {
                if (!_.includes(_.values(exports.TSDOC_ARGUMENTS), argPart)) {
                    throw "Unexpected argument " + argPart;
                }
                currentArg = argPart;
            }
            else if (!_.isEmpty(preparedArgs)) {
                currentArgValue = _.get(preparedArgs, currentArg) || argPart;
                if (_.isArray(currentArgValue)) {
                    currentArgValue.push(argPart);
                }
                else {
                    currentArgValue = [currentArgValue];
                }
            }
            if (currentArg) {
                _.set(preparedArgs, currentArg, currentArgValue);
            }
            return preparedArgs;
        }, {})
            .value();
    };
    return ArgumentsParser;
}());
exports.ArgumentsParser = ArgumentsParser;
