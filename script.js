let currentNumber = 0;
let previousNumber = 0;
let operand;

let numberList = document.getElementsByClassName("bt");
for (let i = 0; i < numberList.length; i++) {
    numberList[i].addEventListener('click', clickDigit);
}

function clickDigit(e) {
    currentNumber = currentNumber * 10 + parseInt(e.currentTarget.value);
    refreshOutput();
}

document.getElementById('bt-plus').addEventListener('click', clickPlus);
document.getElementById('bt-minus').addEventListener('click', clickMinus);
document.getElementById('bt-div').addEventListener('click', clickDiv);
document.getElementById('bt-mul').addEventListener('click', clickMul);
document.getElementById('bt-eq').addEventListener('click', clickEq);
document.getElementById('bt-ac').addEventListener('click', clickAc);

function clickPlus() {
    if (!operand) {
        if (currentNumber) {
            previousNumber = currentNumber;
        }
    } else {
        calculate();
    }
    currentNumber = 0;
    operand = '+';
    refreshOutput();
}

function clickMinus() {
    if (!operand) {
        if (currentNumber) {
            previousNumber = currentNumber;
        }
    } else {
        calculate();
    }
    currentNumber = 0;
    operand = '-';
    refreshOutput();
}

function clickDiv() {
    if (!operand) {
        if (currentNumber) {
            previousNumber = currentNumber;
        }
    } else {
        calculate();
    }
    currentNumber = 0;
    operand = '/';
    refreshOutput();
}

function clickMul() {
    if (!operand) {
        if (currentNumber) {
            previousNumber = currentNumber;
        }
    } else {
        calculate();
    }
    currentNumber = 0;
    operand = '*';
    refreshOutput();
}

function clickEq() {
    calculate();
    currentNumber = 0;
    operand = undefined;
    refreshOutput();
}


function clickAc() {
    currentNumber = 0;
    previousNumber = 0;
    operand = undefined;
    refreshOutput();
}

function calculate() {
    switch (operand) {
        case '+':
            previousNumber = previousNumber + currentNumber;
            break;
        case '-':
            previousNumber = previousNumber - currentNumber;
            break;
        case '*':
            previousNumber = previousNumber * currentNumber;
            break;
        case '/':
            if (currentNumber) {
                console.log("Division by 0!");
                previousNumber = previousNumber / currentNumber;
            }
            break;
    }
}

function refreshOutput() {
    let displayValue = '';
    if (previousNumber) {
        displayValue += previousNumber;
    }
    if (operand) {
        displayValue += operand;
    }
    if (operand || currentNumber) {
        displayValue += currentNumber;
    }
    document.getElementById('output').value = displayValue;
}
