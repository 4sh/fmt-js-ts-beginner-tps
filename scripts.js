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
        
        const squareWarningElement = document.getElementById(squareIsBiggerThanOneThousandMessageId);

        if (square >= 1000) {
            if (!squareWarningElement) {
                const newSquareWarningElement = document.createElement('div');
                newSquareWarningElement.id = squareIsBiggerThanOneThousandMessageId;
                newSquareWarningElement.innerText = squareIsBiggerThanOneThousandMessage;
                
                document.querySelector('body').appendChild(newSquareWarningElement);
            }
        } else {
            if (squareWarningElement) {
                squareWarningElement.remove();
            }
        }
    })
    document.getElementById('resetButton').addEventListener('click', () => {
        numberInputElement.value = 0;
        updateSquareValue(0);
    })
    
})