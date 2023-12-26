const resolvedPromiseCreatedUsingConstructor;
const rejectedPromiseCreatedUsingConstructor;
const resolvedPromiseCreatedUsingPromiseAPI;
const rejectedPromiseCreatedUsingPromiseAPI;

function printSquare(x) {
    return console.log(x**2);
}

function printStringLength(str) {
    return console.log(str.length);
}

resolvedPromiseCreatedUsingConstructor.then(printSquare);
rejectedPromiseCreatedUsingConstructor.catch(printStringLength)
resolvedPromiseCreatedUsingPromiseAPI.then(printSquare);
rejectedPromiseCreatedUsingPromiseAPI.catch(printStringLength)
