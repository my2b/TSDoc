"use strict";
const _ = require("lodash");
const TSDOC_SINGLE_ARGS = ['help', 'version'];
const TSDOC_CHAIN_ARGS = ['out',];
const TSDOC_ALL_ARGS = _.concat(TSDOC_CHAIN_ARGS, TSDOC_SINGLE_ARGS);
const ARGUMENTS_PREFIX = '--';
class ArgumentsParser {
    constructor(argv) {
        this.argv = argv;
    }
    parse() {
        let currentArg, parsedArgs = _.transform(this.argv, (preparedArgs, argPart) => {
            let currentArgValue;
            if (_.startsWith(argPart, ARGUMENTS_PREFIX)) {
                currentArg = argPart.substr(_.size(ARGUMENTS_PREFIX));
                if (!_.includes(TSDOC_ALL_ARGS, currentArg)) {
                    throw `Unexpected argument \"${argPart}\". Run \"tsdoc --help\" for help`;
                }
            }
            else if (preparedArgs) {
                currentArgValue = _.get(preparedArgs, currentArg) || argPart;
                if (_.isArray(currentArgValue)) {
                    currentArgValue.push(argPart);
                }
                else if (currentArgValue) {
                    currentArgValue = [currentArgValue];
                }
            }
            if (currentArg) {
                _.set(preparedArgs, currentArg, currentArgValue);
            }
            return preparedArgs;
        }, {});
        if (_.isEmpty(parsedArgs)) {
            throw `No parameters were passed. Run \"tsdoc --help\" for help`;
        }
        return parsedArgs;
    }
}
exports.ArgumentsParser = ArgumentsParser;
