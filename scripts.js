async function buildRandomPromise() {
    const randomNumber = Math.random();
    if(randomNumber > 0.5) {
        throw Error(`Oh no, the number ${randomNumber} is too high`);
    }

    return randomNumber;
}

async function main() {
    for (let i = 0; i < 10; ++i) {
        try {
            const randomNumber = await buildRandomPromise();
            console.log((randomNumber + 1) * 2);
        } catch(error) {
            console.log(error.message);
        } finally {
            console.log('Random promise terminated')
        }
    }
}

main();

