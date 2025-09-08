const numbers = [12, 1, 96, 5, 45];

// Using Array.reduce()
const reduceMinimum = numbers.reduce((min, n) => n < min ? n : Infinity);
console.log(reduceMinimum);

// Using Math.min()
// Math.min() can take multiple parameters (Math.min(3,6,2,4) => 2)
// Here, we're using spread operator (...) to transform array into parameters
const mathMinimum1 = Math.min(...numbers);
console.log(mathMinimum1);
// We can also call prototype's function apply()
const mathMinimum2 = Math.min.apply(null, numbers);
console.log(mathMinimum2);

// Using Array.sort()
// warning: Array.sort() mutates underlying array !
const sortedNumbers = numbers.sort((n1, n2) => n1 - n2);
console.log(sortedNumbers[0]);
// Beware: after that, numbers is updated !

