function buildRandomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if(randomNumber > 0.5) {
            reject(`Oh no, the number ${randomNumber} is too high`);
        }

        resolve(randomNumber);
    });
}

for (let i = 0; i < 10; ++i) {
    buildRandomPromise()
        .then(n => console.log(n))
        .catch((reason) => console.log('Promise was rejected: ' + reason))
        .finally(() => console.log('Random promise terminated'))
}

