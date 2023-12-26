async function buildRandomPromise() {
    const randomNumber = Math.random();
    if(randomNumber > 0.5) {
        throw Error(`Oh no, the number ${randomNumber} is too high`);
    }

    return randomNumber;
}

function main() {
    for (let i = 0; i < 10; ++i) {
        buildRandomPromise()
            .then(n => n + 1)
            .then(n => n * 2)
            .then(n => console.log(n))
            .catch((reason) => console.log('Promise was rejected: ' + reason))
            .finally(() => console.log('Random promise terminated'))
    }
}

main()


