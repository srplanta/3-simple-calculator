function Add(num1, num2) {
    return num1 + num2;
}
// -------------------------------------------

function Subtract(num1, num2) {
    return num1 - num2;
}
// -------------------------------------------

function Multiply(num1, num2) {
    return num1 * num2;
}
// -------------------------------------------

function Divide(num1, num2) {
    return num1 / num2;
}
// -------------------------------------------

// num1 = 23;
// num2 = 14;
let num1 = parseInt(window.prompt("Enter num1: "));
let num2 = parseInt(window.prompt("Enter num2: "));
let operator = window.prompt("Enter operator: ");

// debugger
switch (operator) {
    case '+':
        document.write(`num1: ${num1}<br>`);
        document.write(`num2: ${num2}<br>`);
        document.write(`oprtr: ${operator}<br>`);
        document.write(`SUM: ${Add(num1, num2)}<br>`);
        break;

    case '-':
        document.write(`num1: ${num1}<br>`)
        document.write(`num2: ${num2}<br>`)
        document.write(`oprtr: ${operator}<br>`);
        document.write(`DIF: ${Subtract(num1, num2)}<br>`);
        break;

    case '*':
        document.write(`num1: ${num1}<br>`);
        document.write(`num2: ${num2}<br>`);
        document.write(`oprtr: ${operator}<br>`);
        document.write(`MUL: ${Multiply(num1, num2)}<br>`);
        break;

    case '/':
        document.write(`num1: ${num1}<br>`);
        document.write(`num2: ${num2}<br>`);
        document.write(`oprtr: ${operator}<br>`);
        document.write(`DIV: ${Divide(num1, num2)}<br>`);
        break;

    default:
        document.write("Choose better option plz!");
        break;
}