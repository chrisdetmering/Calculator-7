const numberButtons = document.querySelectorAll('.number');
const buttonArea = document.querySelector('#buttons');
const numberInput = document.querySelector('#numberinput');

function getNumberFromButton(button) {
    let clickedNumber = '';
    Array.from(numberButtons).map(numberButton => {
        if (button.target.textContent === numberButton.textContent) {
            clickedNumber = numberButton.textContent;
        };
    });
    return clickedNumber;
}

function checkForSingleZero() {
    if (numberInput.textContent === '0' && numberInput.textContent.length === 1) {
        numberInput.textContent = '';
    };
}

function writeNumberToNumberInput(button) {
    if (numberInput.textContent.length === 20) {
        return;
    };
    checkForSingleZero();
    numberInput.textContent = numberInput.textContent.concat(getNumberFromButton(button));
}

buttonArea.addEventListener('click', writeNumberToNumberInput);
