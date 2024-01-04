function onResetButtonClick() {
    console.log('Reset button was clicked!');
}

function onNumberInputClick() {
    console.log('Number input was clicked!');
}


document.addEventListener("DOMContentLoaded", () => {
    const numberInputElement = document.getElementById('numberInput');
    numberInputElement.addEventListener('click', onNumberInputClick);
    numberInputElement.addEventListener('change', () => {
        console.log(`New value: ${numberInputElement.value}`);
    })
})