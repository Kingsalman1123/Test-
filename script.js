document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '';
    let currentOperation = '';

    function updateDisplay() {
        display.value = currentInput;
    }

    function clearCalculator() {
        currentInput = '';
        currentOperation = '';
        updateDisplay();
    }

    function calculate() {
        if (currentOperation === 'sqrt') {
            currentInput = Math.sqrt(parseFloat(currentInput));
        } else if (currentOperation === 'sin') {
            currentInput = Math.sin(parseFloat(currentInput));
        } else if (currentOperation === 'cos') {
            currentInput = Math.cos(parseFloat(currentInput));
        } else if (currentOperation === 'tan') {
            currentInput = Math.tan(parseFloat(currentInput));
        } else {
            currentInput = eval(currentInput);
        }
        currentOperation = '';
        updateDisplay();
    }

    function handleButtonClick(value) {
        if (value === '=') {
            calculate();
        } else if (value === 'C') {
            clearCalculator();
        } else {
            currentInput += value;
            updateDisplay();
        }
    }

    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            handleButtonClick(button.textContent);
        });
    });
});
