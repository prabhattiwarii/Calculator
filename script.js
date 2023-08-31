let expression = '';

function insertDigit(digit) {
    expression += digit;
    updateScreen();
}

function insertOperator(operator) {
    if (expression.slice(-1) === '+' ||
        expression.slice(-1) === '-' ||
        expression.slice(-1) === '*' ||
        expression.slice(-1) === '/') {
        expression = expression.slice(0, -1);
    }
    expression += operator;
    updateScreen();
}

function insertPercentage() {
    const lastNumIndex = expression.search(/[-+*/]/g);
    const lastNum = expression.slice(lastNumIndex+1);
    const percentage = Number(lastNum) / 100;
    expression = expression.slice(0, lastNumIndex+1) + percentage;
    updateScreen();
}

function calculate() {
    const result = eval(expression);
    expression = result.toString();
    updateScreen();
}

function clearScreen() {
    expression = '';
    updateScreen();
}

function deleteDigit() {
    expression = expression.slice(0, -1);
    updateScreen();
}

function updateScreen() {
    const screen = document.querySelector('.screen');
    screen.innerHTML = expression;
}
