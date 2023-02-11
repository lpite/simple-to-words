const thousands = [
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
const hundreds = [
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
const dozens = [
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
const numbers = [
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
const dozensBeetween11and19 = [
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
const coins = [
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
const hryvnias = [
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

export default function convertToWords(number: number) {
  const numberBeforeDot = number.toString().split(".")[0];
  let numberAfterDot = number.toString().split(".")[1];
  if (!numberAfterDot) {
    numberAfterDot = "00";
  }
  if (numberAfterDot.length > 2) {
    numberAfterDot = numberAfterDot.slice(0, 2);
  }

  if (numberBeforeDot.length === 5) {
    const result: string[] = []
    if (checkIfnumberBetwen11and19(numberBeforeDot.slice(0, 2))) {
      result.push(dozensBeetween11and19[parseInt(numberBeforeDot.slice(1, 2))]);
    } else {
      result.push(returnDozens(numberBeforeDot.slice(0, 1)));
      if (numberBeforeDot.slice(1, 2) !== "0") {
        result.push(returnNumbers(numberBeforeDot.slice(1, 2)));
      }
    }
    result.push(`тисяч ${returHundreds(numberBeforeDot.slice(2, 3))}`);
    if (checkIfnumberBetwen11and19(numberBeforeDot.slice(3, 5))) {
      result.push(
        `${dozensBeetween11and19[parseInt(numberBeforeDot.slice(4, 5))]} гривень`
      );
    } else {
      result.push(`${dozens[parseInt(numberBeforeDot.slice(3, 4))]}`);
      if (numberBeforeDot.slice(4, 5) !== "0") {
        result.push(returnNumbers(numberBeforeDot.slice(4, 5)));
      }
      result.push(returnHryvnias(numberBeforeDot.slice(4, 5)));
    }

    result.push(returnCoinsWithNumber(numberAfterDot));
    const resultString = result.join(" ");
    return resultString
  }
  if (numberBeforeDot.length === 4) {
    const result: string[] = []
    result.push(returnNumbers(numberBeforeDot.slice(0, 1)));
    result.push(thousands[parseInt(numberBeforeDot.slice(0, 1))])
    result.push(returHundreds(numberBeforeDot.slice(1, 2)));
    if (checkIfnumberBetwen11and19(numberBeforeDot.slice(2, 4))) {
      result.push(dozensBeetween11and19[parseInt(numberBeforeDot.slice(3, 4))]);
    } else {
      result.push(dozens[parseInt(numberBeforeDot.slice(2, 3))]);
      if (numberBeforeDot.slice(3, 4) !== "0") {
        result.push(returnNumbers(numberBeforeDot.slice(3, 4)));
      }
    }
    result.push(hryvnias[parseInt(numberBeforeDot.slice(3, 4))])
    result.push(returnCoinsWithNumber(numberAfterDot))

    const resultString = result.join(" ");
    return resultString;
  }

  if (numberBeforeDot.length === 3) {
    const result: string[] = []

    result.push(returHundreds(numberBeforeDot.slice(0, 1)));
    if (checkIfnumberBetwen11and19(numberBeforeDot.slice(1, 3))) {
      result.push(dozensBeetween11and19[parseInt(numberBeforeDot.slice(2, 3))]);
      result.push(hryvnias[0])
    } else {
      result.push(dozens[parseInt(numberBeforeDot.slice(1, 2))]);
      if (numberBeforeDot.slice(2, 3) !== "0") {
        result.push(returnNumbers(numberBeforeDot.slice(2, 3)));
      }
      result.push(returnHryvnias(numberBeforeDot.slice(2, 3)));
    }
    result.push(returnCoinsWithNumber(numberAfterDot));
    const resultString = result.join(" ")
    return resultString
  }

  if (numberBeforeDot.length === 2) {
    const result: string[] = []
    if (checkIfnumberBetwen11and19(numberBeforeDot)) {
      result.push(`${dozensBeetween11and19[parseInt(numberBeforeDot.slice(1, 2))]} гривень`);
    } else {
      result.push(returnDozens(numberBeforeDot.slice(0, 1)));
      if (numberBeforeDot.slice(1, 2) !== "0") {
        result.push(returnNumbers(numberBeforeDot.slice(1, 2)));
      }
      result.push(returnHryvnias(numberBeforeDot.slice(1, 2)));
    }
    result.push(`${returnCoinsWithNumber(numberAfterDot)}`);
    const resultString = result.join(" ")
    return resultString;
  }
  if (numberBeforeDot.length === 1) {
    const result: string[] = []
    result.push(returnNumbers(numberBeforeDot.slice(0, 1)));
    result.push(returnHryvnias(numberBeforeDot.slice(0, 1)));
    result.push(returnCoinsWithNumber(numberAfterDot));
    const resultString = result.join(" ");
    return resultString;
  }
  return "Помилочка";
}
function checkIfnumberBetwen11and19(string: string) {
  const number = parseInt(string);
  if (number <= 19 && number >= 11) {
    return true;
  }
  return false;
}
function returHundreds(string: string) {
  const number = parseInt(string);
  return hundreds[number];
}
function returnCoinsWithNumber(string: string) {
  let returnedString = "";
  if (string.slice(0, 1) === "0") {
    returnedString += `${string.slice(1, 2)}`;
  } else {
    returnedString += `${string}0`;
  }
  returnedString += " копійок";
  return returnedString;
}

function returnHryvnias(string: string) {
  const number = parseInt(string);
  return hryvnias[number];
}
function returnDozens(string: string) {
  if (string) {
    const number = parseInt(string);
    return dozens[number];
  }
  return "";
}
function returnNumbers(string: string) {
  const number = parseInt(string);
  return numbers[number];
}
