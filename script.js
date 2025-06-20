function add() {
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  document.getElementById("output").innerText = num1 + num2;
}

function subtract() {
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  document.getElementById("output").innerText = num1 - num2;
}

function multiply() {
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  document.getElementById("output").innerText = num1 * num2;
}

function divide() {
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  document.getElementById("output").innerText = num1 / num2;
}

function square() {
  var num = parseFloat(document.getElementById("number1").value);
  document.getElementById("output").innerText = num * num;
}

function cube() {
  var num = parseFloat(document.getElementById("number1").value);
  document.getElementById("output").innerText = num * num * num;
}
