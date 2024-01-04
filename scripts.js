function computeSquare(x) {
    return Number(x**2);
}

function updateSquareValue(newValue) {
    document.getElementById('square').innerText = newValue.toString();
}

const squareIsBiggerThanOneThousandMessage = 'Le carré du nombre est plus grand que 1000 !';
const squareIsBiggerThanOneThousandMessageId= 'squareValueWarning';

document.addEventListener("DOMContentLoaded", () => {
    const numberInputElement = document.getElementById('numberInput');
    numberInputElement.addEventListener('change', () => {
        const square = computeSquare(numberInputElement.value);
        updateSquareValue(square);
    })
    document.getElementById('resetButton').addEventListener('click', () => {
        numberInputElement.value = 0;
        updateSquareValue(0);
    })

})
