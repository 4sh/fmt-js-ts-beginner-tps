const numbers = [12, 1, 96, 5, 45];

// Using a for loop
let sum = 0;

for(let n of numbers) {
    sum += n;    
}

console.log(sum);

// Using reduce
console.log(numbers.reduce((previousValue, currentValue) => previousValue + currentValue));