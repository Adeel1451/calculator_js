function appendToDisplay(value) {
            const display = document.getElementById('display');
            display.value += value;
        }
        function backspace() {
            const display = document.getElementById('display');
            display.value = display.value.slice(0, -1);
        }   
        function clearDisplay() {
            document.getElementById('display').value = '';
        }
        
        function calculate() {
            const display = document.getElementById('display');
            try {
                const result = new Function('return ' + display.value)();
                if (!isFinite(result)) {
                    display.value = "Error";
                    return;
                }
                
                display.value = result;
            } catch (error) {
                display.value = "Error";
            }
        }