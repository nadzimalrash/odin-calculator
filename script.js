const displayValue = document.querySelector(".display");
let num1 = "";
let num2 = "";
let operator = "";
let ans= "";
let equal = false;

const numberButtons = document.querySelectorAll(".numbers button");
numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (equal === false) {
            displayValue.textContent = displayValue.textContent + button.textContent;
        } else {
            displayValue.textContent = button.textContent;
            num1 = "";
            equal = false;
        }
        if (operator === "") {
            num1 = num1 + button.textContent;
            num1 = Number(num1);
        } else {
            num2 = num2 + button.textContent;
            num2 = Number(num2);
        }
    })
})

const operatorButtons = document.querySelectorAll(".operators button");
operatorButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        displayValue.textContent = displayValue.textContent + button.textContent;
        equal = false;
        if (num2 != "") {
            ans = operate(operator, num1, num2);
            displayValue.textContent = ans + button.textContent;
            num1 = ans;
            num2 = "";
        }
        operator = button.textContent;
    })
})

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function() {
    displayValue.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
    ans = "";
    console.clear();
})

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", function() {
    ans = operate(operator, num1, num2);
    displayValue.textContent = ans;
    num1 = ans;
    num2 = "";
    operator = "";
    equal = true;
})

const operate = function(operator, a, b) {
    switch(operator) {
        case "+":
            ans = a + b;
            break;
        case "-":
            ans = a - b;
            break;
        case "×":
            ans = a * b;
            break;
        case "÷":
            if (b == 0) {
                ans = "NoOoOoOo";
            } else {
                ans = a / b;
            }
            break;
        default:
            break; 
    }
    return ans;
}