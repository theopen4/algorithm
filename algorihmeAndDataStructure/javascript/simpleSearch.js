const tableau = new Array(100).fill().map((x, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 100);
console.log('numberToGuess:', numberToGuess);
let numberOfTries = 0;
function SimpleSearch(tableau, numberToGuess) {
  for (let i = 0; i < tableau.length; i++) {
    numberOfTries++;
    if (numberToGuess === tableau[i]) {
      return tableau[i];
    }
  }
}

console.log(
  'result:',
  SimpleSearch(tableau, numberToGuess),
  'numbersTries:',
  numberOfTries
);
console.log(tableau.length);
