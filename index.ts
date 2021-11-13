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
const hz4 = [
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
const hz5 = [
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
  const slicedNumber = number.toString().split(".")[0];
  let numberAfterDot = number.toString().split(".")[1];
  if (!numberAfterDot) {
    numberAfterDot = "00";
  }
  if (numberAfterDot.length > 2) {
    numberAfterDot = numberAfterDot.slice(0, 2);
  }

  if (slicedNumber.length === 5) {
    const returnedString = [];
    if (checkIfnumberBetwen11and19(slicedNumber.slice(0, 2))) {
      returnedString.push(hz5[parseInt(slicedNumber.slice(1, 2))]);
    } else {
      returnedString.push(returnDozens(slicedNumber.slice(0, 1)) + " ");
      if (slicedNumber.slice(1, 2) !== "0") {
        returnedString.push(hz4[parseInt(slicedNumber.slice(1, 2))]);
      }
    }
    returnedString.push(` тисяч ${returHundreds(slicedNumber.slice(2, 3))} `);
    if (checkIfnumberBetwen11and19(slicedNumber.slice(3, 5))) {
      returnedString.push(
        `${hz5[parseInt(slicedNumber.slice(4, 5))]} гривень `
      );
    } else {
      returnedString.push(`${dozens[parseInt(slicedNumber.slice(3, 4))]} `);
      if (slicedNumber.slice(4, 5) !== "0") {
        returnedString.push(` ${hz4[parseInt(slicedNumber.slice(4, 5))]} `);
      }
      returnedString.push(
        `
              ${returnHryvnias(slicedNumber.slice(4, 5))} 
              `
      );
    }

    returnedString.push(`${returnCoinsWithNumber(numberAfterDot)}`);
    return returnedString.toString().replace(/,/g, "");
  }
  if (slicedNumber.length === 4) {
    const returnedString = [];
    returnedString.push(`${hz4[parseInt(slicedNumber.slice(0, 1))]} 
          ${thousands[parseInt(slicedNumber.slice(0, 1))]} 
          ${returHundreds(slicedNumber.slice(1, 2))} `);
    //первые 3 буквы
    if (checkIfnumberBetwen11and19(slicedNumber.slice(2, 4))) {
      returnedString.push(hz5[parseInt(slicedNumber.slice(3, 4))]);
    } else {
      returnedString.push(
        `${dozens[parseInt(slicedNumber.slice(2, 3))]} `
        //че за магия
      );
      if (slicedNumber.slice(3, 4) !== "0") {
        returnedString.push(`${hz4[parseInt(slicedNumber.slice(3, 4))]}`);
      }
    }
    returnedString.push(`
          ${hryvnias[parseInt(slicedNumber.slice(3, 4))]} 
          ${returnCoinsWithNumber(numberAfterDot)} `);

    return returnedString.toString().replace(/,/g, "");
  }

  if (slicedNumber.length === 3) {
    const returnedString = [];
    returnedString.push(returHundreds(slicedNumber.slice(0, 1)) + " ");
    if (checkIfnumberBetwen11and19(slicedNumber.slice(1, 3))) {
      returnedString.push(
        ` ${hz5[parseInt(slicedNumber.slice(2, 3))]} 
              ${hryvnias[0]}`
      );
    } else {
      returnedString.push(dozens[parseInt(slicedNumber.slice(1, 2))] + " ");
      if (slicedNumber.slice(2, 3) !== "0") {
        returnedString.push(hz4[parseInt(slicedNumber.slice(2, 3))] + " ");
      }
      returnedString.push(returnHryvnias(slicedNumber.slice(2, 3)) + " ");
    }
    returnedString.push(` ${returnCoinsWithNumber(numberAfterDot)} `);
    return returnedString.toString().replace(/,/g, "");
  }

  if (slicedNumber.length === 2) {
    const returnedString = [];
    if (checkIfnumberBetwen11and19(slicedNumber)) {
      returnedString.push(
        `${hz5[parseInt(slicedNumber.slice(1, 2))]} гривень `
      );
    } else {
      returnedString.push(returnDozens(slicedNumber.slice(0, 1)) + " ");
      if (slicedNumber.slice(1, 2) !== "0") {
        returnedString.push(hz4[parseInt(slicedNumber.slice(1, 2))] + " ");
      }
      returnedString.push(returnHryvnias(slicedNumber.slice(1, 2)) + " ");
    }
    returnedString.push(` ${returnCoinsWithNumber(numberAfterDot)} `);
    return returnedString.toString().replace(/,/g, "");
  }
  if (slicedNumber.length === 1) {
    return `${hz4[parseInt(slicedNumber.slice(0, 1))]} ${returnHryvnias(
      slicedNumber.slice(0, 1)
    )} ${returnCoinsWithNumber(numberAfterDot)}`;
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
    returnedString += ` ${string.slice(1, 2)} `;
  } else {
    returnedString += ` ${string}0 `;
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
