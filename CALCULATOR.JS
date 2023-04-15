function appendToScreen(value) {
    document.getElementById("screen").value += value;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function calculate() {
    var expression = document.getElementById("screen").value;
    var result = eval(expression);
    document.getElementById("screen").value = result;
}
