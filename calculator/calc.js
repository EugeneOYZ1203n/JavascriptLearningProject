var current_operand = 0;
var previous_operand = 0;
var operation = '';

function addDigit(inputDigit){
    if (inputDigit == 'DoubleZero'){
        current_operand = current_operand*100;
    }
    else{
        current_operand = current_operand*10 + inputDigit;
    }

    updateDisplay();
}

function allClear(){
    current_operand = 0;
    previous_operand = 0;

    updateDisplay();
}

function singleClear(){
    current_operand = Math.floor(current_operand/10)

    updateDisplay();
}

function setOperation(symbol){
    if (previous_operand != 0){
        evaluateOperation();
    }

    operation = symbol;
    previous_operand = current_operand;
    current_operand = 0;

    updateDisplay();
}

function evaluateOperation(){
    var result = 0;
    
    if (operation == "+"){
        result = previous_operand + current_operand;
    }
    else if (operation == "-"){
        result = previous_operand - current_operand;
    }
    else if (operation == "x"){
        result = previous_operand * current_operand;
    }
    else if (operation == "/"){
        result = previous_operand / current_operand;
    }
    else{
        return;
    }

    current_operand = result;
    previous_operand = 0;
    operation = '';

    updateDisplay();
}

function updateDisplay(){
    var currentOperandTxt = document.getElementById("current-operand");
    var previousOperandTxt = document.getElementById("previous-operand");

    currentOperandTxt.innerHTML = current_operand.toString();
    previousOperandTxt.innerHTML = previous_operand.toString() + " " + operation.toString();
}