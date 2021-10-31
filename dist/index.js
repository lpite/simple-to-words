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
var hz4 = [
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
var hz5 = [
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
    var slicedNumber = number.toString().split(".")[0];
    var numberAfterDot = number.toString().split(".")[1];
    if (!numberAfterDot) {
        numberAfterDot = "00";
    }
    if (numberAfterDot.length > 2) {
        numberAfterDot = numberAfterDot.slice(0, 2);
    }
    if (slicedNumber.length === 5) {
        var returnedString = [];
        if (checkIfnumberBetwen11and19(slicedNumber.slice(0, 2))) {
            returnedString.push(hz5[parseInt(slicedNumber.slice(1, 2))]);
        }
        else {
            returnedString.push(returnDozens(slicedNumber.slice(0, 1)) + " ");
            if (slicedNumber.slice(1, 2) !== "0") {
                returnedString.push(hz4[parseInt(slicedNumber.slice(1, 2))]);
            }
        }
        returnedString.push(" \u0442\u0438\u0441\u044F\u0447 " + returHundreds(slicedNumber.slice(2, 3)) + " ");
        if (checkIfnumberBetwen11and19(slicedNumber.slice(3, 5))) {
            returnedString.push(hz5[parseInt(slicedNumber.slice(4, 5))] + " \u0433\u0440\u0438\u0432\u0435\u043D\u044C ");
        }
        else {
            returnedString.push(dozens[parseInt(slicedNumber.slice(3, 4))] + " ");
            if (slicedNumber.slice(4, 5) !== "0") {
                returnedString.push(" " + hz4[parseInt(slicedNumber.slice(4, 5))] + " ");
            }
            returnedString.push("\n              " + returnHryvnias(slicedNumber.slice(4, 5)) + " \n              ");
        }
        returnedString.push("" + returnCoinsWithNumber(numberAfterDot));
        return returnedString.toString().replace(/,/g, "");
    }
    if (slicedNumber.length === 4) {
        var returnedString = [];
        returnedString.push(hz4[parseInt(slicedNumber.slice(0, 1))] + " \n          " + thousands[parseInt(slicedNumber.slice(0, 1))] + " \n          " + returHundreds(slicedNumber.slice(1, 2)) + " ");
        //первые 3 буквы
        if (checkIfnumberBetwen11and19(slicedNumber.slice(2, 4))) {
            returnedString.push(hz5[parseInt(slicedNumber.slice(3, 4))]);
        }
        else {
            returnedString.push(dozens[parseInt(slicedNumber.slice(2, 3))] + " "
            //че за магия
            );
            if (slicedNumber.slice(3, 4) !== "0") {
                returnedString.push("" + hz4[parseInt(slicedNumber.slice(3, 4))]);
            }
        }
        returnedString.push("\n          " + hryvnias[parseInt(slicedNumber.slice(3, 4))] + " \n          " + returnCoinsWithNumber(numberAfterDot) + " ");
        return returnedString.toString().replace(/,/g, "");
    }
    if (slicedNumber.length === 3) {
        var returnedString = [];
        returnedString.push(returHundreds(slicedNumber.slice(0, 1)) + " ");
        if (checkIfnumberBetwen11and19(slicedNumber.slice(1, 3))) {
            returnedString.push(" " + hz5[parseInt(slicedNumber.slice(2, 3))] + " \n              " + hryvnias[0]);
        }
        else {
            returnedString.push(dozens[parseInt(slicedNumber.slice(1, 2))] + " ");
            if (slicedNumber.slice(2, 3) !== "0") {
                returnedString.push(hz4[parseInt(slicedNumber.slice(2, 3))] + " ");
            }
            returnedString.push(returnHryvnias(slicedNumber.slice(2, 3)) + " ");
        }
        returnedString.push(" " + returnCoinsWithNumber(numberAfterDot) + " ");
        return returnedString.toString().replace(/,/g, "");
    }
    if (slicedNumber.length === 2) {
        var returnedString = [];
        if (checkIfnumberBetwen11and19(slicedNumber)) {
            returnedString.push(hz5[parseInt(slicedNumber.slice(1, 2))] + " \u0433\u0440\u0438\u0432\u0435\u043D\u044C ");
        }
        else {
            returnedString.push(returnDozens(slicedNumber.slice(0, 1)) + " ");
            if (slicedNumber.slice(1, 2) !== "0") {
                returnedString.push(hz4[parseInt(slicedNumber.slice(1, 2))] + " ");
            }
            returnedString.push(returnHryvnias(slicedNumber.slice(1, 2)) + " ");
        }
        returnedString.push(" " + returnCoinsWithNumber(numberAfterDot) + " ");
        return returnedString.toString().replace(/,/g, "");
    }
    if (slicedNumber.length === 1) {
        return hz4[parseInt(slicedNumber.slice(0, 1))] + " \n          " + returnHryvnias(slicedNumber.slice(0, 1)) + " \n          " + returnCoinsWithNumber(numberAfterDot);
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
        returnedString += string.slice(1, 2) + " ";
    }
    else {
        returnedString += string + "0 ";
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
