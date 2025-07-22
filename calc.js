function appendToDisplay(value) {
    const display = document.getElementById('display');
    const expression = document.getElementById('expression');
    if (value === '*') {
        display.value += '×';
        expression.value += '*';
    } else {
        display.value += value;
        expression.value += value;
    }
}
        function backspace() {
    const display = document.getElementById('display');
    const expression = document.getElementById('expression');

    if (display.value.endsWith('×')) {
        display.value = display.value.slice(0, -1);
        expression.value = expression.value.slice(0, -1);
    } else {
        display.value = display.value.slice(0, -1);
        expression.value = expression.value.slice(0, -1);
    }
    }

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('expression').value = '';
    }
        function calculate() {
    const display = document.getElementById('display');
    const expression = document.getElementById('expression');
    try {
        const result = new Function('return ' + expression.value)();
        if (!isFinite(result)) {
            display.value = "Error";
            expression.value = '';
            return;
        }
        display.value = result;
        expression.value = result;
    } catch (error) {
        display.value = "Error";
        expression.value = '';
    }
    }
