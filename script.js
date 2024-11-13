
function appendValue(value) {
    document.getElementById("display").value += value;
}


function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateSquare() {
    let display = document.getElementById("display");
    try {
        let value = parseFloat(display.value);
        if (!isNaN(value)) {
            display.value = value * value;
        } else {
            display.value = "Error";
        }
    } catch (error) {
        display.value = "Error";
    }
}
