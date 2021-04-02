
// Utility Logic
const numbers = /[0-9]/g;
function getTypeOfNumber(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i].match(numbers).length;
  }
  return sum;
}
function isZero(input) {
  if (input === 0) {
    return true;
  } else {
    return false;
  }
}

// Business Logic
const singleDigits = ["I", "II", "III", "IV", "V", "VI", "VII", "VII", "IX"];
const doubleDigits = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const hundredDigits = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const thousandDigits = ["M", "MM", "MMM"];


function convertSinglesPlaces(index) {
  console.log("singleDigits");
  const firstIndex = parseInt(index - 1);
  if (isZero(firstIndex)) {
    return "";
  }
  return singleDigits[firstIndex];
}

function convertDoubleDigits(tensIndex, onesIndex) {
  console.log("doubleDigits");
  const firstIndex = parseInt(tensIndex);
  const lastIndex = parseInt(onesIndex);
  if (isZero(firstIndex)) {
    return "" + convertSinglesPlaces(onesIndex);
  }
  if (isZero(lastIndex)) {
    return doubleDigits[firstIndex - 1];
  } else {
    return doubleDigits[firstIndex - 1] + convertSinglesPlaces(onesIndex);
  }
}

function convertHundredsDigits(hundredsIndex, tensIndex, onesIndex) {
  console.log("tripleDigits");

  const hIndex = parseInt(hundredsIndex);
  const tIndex = parseInt(tensIndex);
  const oIndex = parseInt(onesIndex);
  if (isZero(hIndex)) {
    return "" + convertDoubleDigits(tensIndex, onesIndex);
  }
  if (isZero(tIndex) && isZero(oIndex)) {
    return hundredDigits[hIndex - 1];
  } else {
    return hundredDigits[hIndex - 1] + convertDoubleDigits(tensIndex, onesIndex);
  }
}

function convertThousandsDigits(thousandsIndex, hundredsIndex, tensIndex, onesIndex) {
  console.log("thousandDigits");
  const thIndex = parseInt(thousandsIndex);
  const hIndex = parseInt(hundredsIndex);
  const tIndex = parseInt(tensIndex);
  const oIndex = parseInt(onesIndex);
  if (isZero(hIndex) && isZero(tIndex) && isZero(oIndex)) {
    return thousandDigits[thIndex - 1]
  } else {
    return thousandDigits[thIndex - 1] + convertHundredsDigits(hundredsIndex, tensIndex, onesIndex);
  }
}

function convertToRomanNumerals(input) {

  if (!isZero(parseInt(input)) && !isZero(parseInt(input.split("")[0]))) {
    const lengthOfNumber = parseInt(getTypeOfNumber(input));
    const numberInput = parseInt(input);
    const numberArray = input.split("");
    if (numberInput <= 3999) {
      if (lengthOfNumber === 4) {
        return convertThousandsDigits(numberArray[0], numberArray[1], numberArray[2], numberArray[3]);
      } else if (lengthOfNumber === 3) {
        return convertHundredsDigits(numberArray[0], numberArray[1], numberArray[2]);
      } else if (lengthOfNumber === 2) {
        return convertDoubleDigits(numberArray[0], numberArray[1]);
      } else if (lengthOfNumber === 1) {
        return convertSinglesPlaces(numberInput);
      } else {
        return ""
      }
    } else {
      return "";
    }
  } else {
    return "";
  }
}




$(document).ready(function () {
  $("#formOne").submit(function (e) {
    const numberInput = $("#numberInput").val();
    const result = convertToRomanNumerals(numberInput);
    if (result) {
      $("#result").append(`<p> You entered: <em>${numberInput}<em>, and you're roman numeral is <b>${result}!<b>`)
    } else {
      alert("Try a different number");
    }
    e.preventDefault();
  });
});











