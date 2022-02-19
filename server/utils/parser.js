"use strict";
exports.__esModule = true;
exports.Parser = void 0;
var Parser = /** @class */ (function () {
    function Parser() {
    }
    Parser.parser = function (input) {
        console.log('Parser ~ parser ~ input', input);
        var output = [];
        var linesArray = input.split(/[{}]/)[1].split(/[\n;,]/).map(function (str) { return str.trim(); }).filter(function (str) { return str; }).map(function (str) { return str.split(/:\s/); });
        linesArray.forEach(function (stringArr) {
            output.push({ name: stringArr[0], type: stringArr[1], label: Parser.toSentenceCase(stringArr[0]) });
        });
        return output;
    };
    // method to convert camelCase to sentence case
    // https://stackoverflow.com/a/7225450
    Parser.toSentenceCase = function (str) {
        var capitalizedWords = str.replace(/([A-Z])/g, ' $1');
        var result = capitalizedWords[0].toUpperCase() + capitalizedWords.substring(1);
        return result;
    };
    return Parser;
}());
exports.Parser = Parser;
