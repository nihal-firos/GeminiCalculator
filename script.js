let result = document.getElementById('result');
let expression = '';

function appendNumber(number) {
    expression += number;
    result.innerText = expression;
}

function appendOperator(operator) {
    expression += operator;
    result.innerText = expression;
}

function calculateResult() {
    try {
        let evalExpression = expression.replace(/%/g, '/100*');
        let calculatedResult = eval(evalExpression);
        result.innerText = calculatedResult;
        expression = calculatedResult.toString();
    } catch (e) {
        result.innerText = 'Error';
        expression = '';
    }
}

function clearResult() {
    expression = '';
    result.innerText = '0';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    result.innerText = expression || '0';
}
