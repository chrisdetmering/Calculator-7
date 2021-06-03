const numberInput = document.querySelector('#numberinput');
let firstOperand = '';
let secondOperand = '';
let operator = '';

function drawToDisplay(value) {
    numberInput.textContent = value;
}

function clearDisplay() {
    numberInput.textContent = '';
}

function solveEquation() {
    const firstNumber = parseFloat(firstOperand);
    const secondNumber = parseFloat(secondOperand);
    if (operator === '+') {
        return firstNumber + secondNumber;
    };
    if (operator === '-') {
        return firstNumber - secondNumber;
    };
    if (operator === 'X') {
        return firstNumber * secondNumber;
    };
    if (operator === '÷') {
        return firstNumber / secondNumber;
    };
}

document.querySelectorAll('.number').forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        const number = numberButton.textContent;

        if (!operator) {
            firstOperand += number;
            drawToDisplay(firstOperand);
            return;
        }
        if (operator) {
            secondOperand += number;
            drawToDisplay(secondOperand);
        }
    })
})

document.querySelector('#decimal').addEventListener('click', () => {
    if (!operator) {
        if (!firstOperand.includes('.')) {
            firstOperand += '.';
            drawToDisplay(firstOperand);
        }
    }

    if (operator) {
        if (!secondOperand.includes('.')) {
            secondOperand += '.';
            drawToDisplay(secondOperand);
        }
    }

});

document.querySelector('#clear').addEventListener('click', () => {
    firstOperand = '';
    operator = '';
    secondOperand = '';
    drawToDisplay('0');
})

document.querySelectorAll('.operator').forEach(operatorButton => {
    operatorButton.addEventListener('click', (event) => {
        const selectedOperator = event.target.textContent;
        if (secondOperand) {
            const result = solveEquation();
            firstOperand = result;
            secondOperand = '';
            operator = selectedOperator;
            drawToDisplay(result);
            return;
        }
        if (firstOperand) {
            operator = selectedOperator;
        }
    })
})

document.querySelector('#equals').addEventListener('click', () => {
    if (secondOperand) {
        const result = solveEquation();
        firstOperand = result;
        secondOperand = '';
        operator = '';
        drawToDisplay(result);
    }
})