const numbers = [12, 1, 96, 5, 45];

// Using for loop
let minimum = numbers[0];

for (let n of numbers) {
    if (n < minimum) {
        minimum = n;
    }
}

console.log(minimum);

// Using sort
console.log(numbers.sort((n1, n2) => n1 - n2)[0]);