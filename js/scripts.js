// let numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
// let romanNumerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

// let numbers = [1000, 100,  10,  1];


// Utility Logic
function singleDigits(input) {
  let returnString = "";
  const inputNumber = parseInt(input);
  for (let i = 0; i < inputNumber; i++) {
    returnString = returnString.concat("I");
  }
  return returnString;
}

// Business Logic
function convertToRomanNumerals(input) {
  // we need to get number and iterate through romanNumerals and find matching index to map to new string
  if (input.length == 1 && input.length <= 3) {
    return singleDigits(input);
  }

}

const romanNumeral = convertToRomanNumerals("1");
console.log(romanNumeral);











// input / numbers[i] = result.trunc * numbers[i] - input - 4000 = remainder

// 500 + 100 = 900
