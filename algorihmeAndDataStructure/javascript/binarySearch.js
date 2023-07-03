const tableau = new Array(100).fill().map((x, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 100);
console.log('numberToGuess:', numberToGuess);
let numberOfTries = 0;
function numberBinary(tableau, numberToGuess) {
  let min = 0;
  let max = tableau.length - 1;
  while (min <= max) {
    const valDivided = Math.floor(min + max / 2);
    const guess = tableau[valDivided];
    numberOfTries++;
    if (guess === numberToGuess) {
      return valDivided;
    } else if (guess > numberToGuess) {
      max = valDivided - 1;
    } else {
      min = valDivided + 1;
    }
  }
}
console.log('result:', numberBinary(tableau, numberToGuess));
console.log('numberTrie:', numberOfTries);
// function binarySearch(tableau, numberToGuess) {
//   let min = 0;
//   let max = tableau.length - 1;
//   while (min <= max) {
//     const divideValue = Math.floor(min + max / 2);
//     const guessVerify = tableau[divideValue];
//     if (guessVerify === numberToGuess) {
//       return guessVerify;
//     } else if (guessVerify > numberToGuess) {
//       max = divideValue - 1;
//     } else {
//       min = divideValue + 1;
//     }
//   }
// }
