let currentInput = '';
let operator = '';
let display = document.getElementById('display');

function clearDisplay() {
    currentInput = '';
    operator = '';
    updateDisplay();
}

function appendInput(value) {
    currentInput += value;
    updateDisplay();
}

function setOperator(value) {
    if (currentInput !== '') {
        operator = value;
        updateDisplay();
    }
}

function calculateResult() {
    if (operator && currentInput !== '') {
        const num1 = parseFloat(currentInput);
        const num2 = parseFloat(currentInput.split(operator)[1]);

        switch (operator) {
            case '+':
                currentInput = num1 + num2;
                break;
            case '-':
                currentInput = num1 - num2;
                break;
            case '*':
                currentInput = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    currentInput = num1 / num2;
                } else {
                    currentInput = 'Error';
                }
                break;
            default:
                break;
        }

        operator = '';
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput.toString();
}

// Attacing event listeners to buttons
document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('plus').addEventListener('click', () => setOperator('+'));
document.getElementById('minus').addEventListener('click', () => setOperator('-'));
document.getElementById('multiply').addEventListener('click', () => setOperator('*'));
document.getElementById('divide').addEventListener('click', () => setOperator('/'));
document.getElementById('equals').addEventListener('click', calculateResult);

// Attaching event listeners to number buttons
for (let i = 0; i <= 9; i++) {
    document.getElementById(`number${i}`).addEventListener('click', () => appendInput(i));
}
