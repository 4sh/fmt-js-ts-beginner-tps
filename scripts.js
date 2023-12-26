const resolvedPromiseCreatedUsingConstructor = new Promise((resolve, reject) => resolve(48));
const rejectedPromiseCreatedUsingConstructor = new Promise((resolve, reject) => reject('rejectedPromiseCreatedUsingConstructor'))
const resolvedPromiseCreatedUsingPromiseAPI = Promise.resolve(96);
const rejectedPromiseCreatedUsingPromiseAPI = Promise.reject('rejectedPromiseCreatedUsingPromiseAPI');

function printSquare(x) {
    return console.log(x**2);
}

function printStringLength(str) {
    return console.log(str.length);
}

resolvedPromiseCreatedUsingConstructor.then(printSquare); // Displays 2304
rejectedPromiseCreatedUsingConstructor.catch(printStringLength) // Displays 38
resolvedPromiseCreatedUsingPromiseAPI.then(printSquare); // Displays 9216
rejectedPromiseCreatedUsingPromiseAPI.catch(printStringLength) // Displays 37
