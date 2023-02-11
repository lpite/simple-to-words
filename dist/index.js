"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var thousands = [
    "тисяч",
    "тисяча",
    "тисячі",
    "тисячі",
    "тисячі",
    "тисяч",
    "тисяч",
    "тисяч",
    "тисяч",
    "тисяч",
    "тисяч",
];
var hundreds = [
    "",
    "сто",
    "двісті",
    "триста",
    "чотириста",
    "п'ятсот",
    "шістсот",
    "сімсот",
    "вісімсот",
    "дев'ятсот",
];
var dozens = [
    "",
    "десять",
    "двадцять",
    "тридцять",
    "сорок",
    "п'ятдесят",
    "шістдесят",
    "сімдесят",
    "вісімдесят",
    "дев'яносто",
];
var numbers = [
    "нуль",
    "одна",
    "дві",
    "три",
    "чотири",
    "п'ять",
    "шість",
    "сім",
    "вісім",
    "дев'ять",
    "десять",
];
var dozensBeetween11and19 = [
    "",
    "одинадцять",
    "дванадцять",
    "тринадцять",
    "чотирнадцять",
    "п'ятнадцять",
    "шістнадцять",
    "сімнадцять",
    "вісімнадцять",
    "дев'ятнадцять",
    "десять",
];
var coins = [
    "копійок",
    "копійка",
    "копійки",
    "копійки",
    "копійки",
    "копійок",
    "копійок",
    "копійок",
    "копійок",
    "копійок",
    "копійок",
];
var hryvnias = [
    "гривень",
    "гривня",
    "гривні",
    "гривні",
    "гривні",
    "гривень",
    "гривень",
    "гривень",
    "гривень",
    "гривень",
    "гривень",
];
function convertToWords(number) {
    var numberBeforeDot = number.toString().split(".")[0];
    var numberAfterDot = number.toString().split(".")[1];
    if (!numberAfterDot) {
        numberAfterDot = "00";
    }
    if (numberAfterDot.length > 2) {
        numberAfterDot = numberAfterDot.slice(0, 2);
    }
    if (numberBeforeDot.length === 5) {
        var result = [];
        if (checkIfnumberBetwen11and19(numberBeforeDot.slice(0, 2))) {
            result.push(dozensBeetween11and19[parseInt(numberBeforeDot.slice(1, 2))]);
        }
        else {
            result.push(returnDozens(numberBeforeDot.slice(0, 1)));
            if (numberBeforeDot.slice(1, 2) !== "0") {
                result.push(returnNumbers(numberBeforeDot.slice(1, 2)));
            }
        }
        result.push("\u0442\u0438\u0441\u044F\u0447 ".concat(returHundreds(numberBeforeDot.slice(2, 3))));
        if (checkIfnumberBetwen11and19(numberBeforeDot.slice(3, 5))) {
            result.push("".concat(dozensBeetween11and19[parseInt(numberBeforeDot.slice(4, 5))], " \u0433\u0440\u0438\u0432\u0435\u043D\u044C"));
        }
        else {
            result.push("".concat(dozens[parseInt(numberBeforeDot.slice(3, 4))]));
            if (numberBeforeDot.slice(4, 5) !== "0") {
                result.push(returnNumbers(numberBeforeDot.slice(4, 5)));
            }
            result.push(returnHryvnias(numberBeforeDot.slice(4, 5)));
        }
        result.push(returnCoinsWithNumber(numberAfterDot));
        var resultString = result.join(" ");
        return resultString;
    }
    if (numberBeforeDot.length === 4) {
        var result = [];
        result.push(returnNumbers(numberBeforeDot.slice(0, 1)));
        result.push(thousands[parseInt(numberBeforeDot.slice(0, 1))]);
        result.push(returHundreds(numberBeforeDot.slice(1, 2)));
        if (checkIfnumberBetwen11and19(numberBeforeDot.slice(2, 4))) {
            result.push(dozensBeetween11and19[parseInt(numberBeforeDot.slice(3, 4))]);
        }
        else {
            result.push(dozens[parseInt(numberBeforeDot.slice(2, 3))]);
            if (numberBeforeDot.slice(3, 4) !== "0") {
                result.push(returnNumbers(numberBeforeDot.slice(3, 4)));
            }
        }
        result.push(hryvnias[parseInt(numberBeforeDot.slice(3, 4))]);
        result.push(returnCoinsWithNumber(numberAfterDot));
        var resultString = result.join(" ");
        return resultString;
    }
    if (numberBeforeDot.length === 3) {
        var result = [];
        result.push(returHundreds(numberBeforeDot.slice(0, 1)));
        if (checkIfnumberBetwen11and19(numberBeforeDot.slice(1, 3))) {
            result.push(dozensBeetween11and19[parseInt(numberBeforeDot.slice(2, 3))]);
            result.push(hryvnias[0]);
        }
        else {
            result.push(dozens[parseInt(numberBeforeDot.slice(1, 2))]);
            if (numberBeforeDot.slice(2, 3) !== "0") {
                result.push(returnNumbers(numberBeforeDot.slice(2, 3)));
            }
            result.push(returnHryvnias(numberBeforeDot.slice(2, 3)));
        }
        result.push(returnCoinsWithNumber(numberAfterDot));
        var resultString = result.join(" ");
        return resultString;
    }
    if (numberBeforeDot.length === 2) {
        var result = [];
        if (checkIfnumberBetwen11and19(numberBeforeDot)) {
            result.push("".concat(dozensBeetween11and19[parseInt(numberBeforeDot.slice(1, 2))], " \u0433\u0440\u0438\u0432\u0435\u043D\u044C"));
        }
        else {
            result.push(returnDozens(numberBeforeDot.slice(0, 1)));
            if (numberBeforeDot.slice(1, 2) !== "0") {
                result.push(returnNumbers(numberBeforeDot.slice(1, 2)));
            }
            result.push(returnHryvnias(numberBeforeDot.slice(1, 2)));
        }
        result.push("".concat(returnCoinsWithNumber(numberAfterDot)));
        var resultString = result.join(" ");
        return resultString;
    }
    if (numberBeforeDot.length === 1) {
        var result = [];
        result.push(returnNumbers(numberBeforeDot.slice(0, 1)));
        result.push(returnHryvnias(numberBeforeDot.slice(0, 1)));
        result.push(returnCoinsWithNumber(numberAfterDot));
        var resultString = result.join(" ");
        return resultString;
    }
    return "Помилочка";
}
exports.default = convertToWords;
function checkIfnumberBetwen11and19(string) {
    var number = parseInt(string);
    if (number <= 19 && number >= 11) {
        return true;
    }
    return false;
}
function returHundreds(string) {
    var number = parseInt(string);
    return hundreds[number];
}
function returnCoinsWithNumber(string) {
    var returnedString = "";
    if (string.slice(0, 1) === "0") {
        returnedString += "".concat(string.slice(1, 2));
    }
    else {
        returnedString += "".concat(string, "0");
    }
    returnedString += " копійок";
    return returnedString;
}
function returnHryvnias(string) {
    var number = parseInt(string);
    return hryvnias[number];
}
function returnDozens(string) {
    if (string) {
        var number = parseInt(string);
        return dozens[number];
    }
    return "";
}
function returnNumbers(string) {
    var number = parseInt(string);
    return numbers[number];
}
