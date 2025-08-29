// Example 1: Change Text
function changeText() {
  document.getElementById("text").innerText = "Text changed using JavaScript!";
}

// Example 2: Simple Calculator
function addNumbers() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("result").innerText = "Sum: " + sum;
}
// Show popup message
function showPopup(message) {
  alert(message);
}

// Example 1: Change Text
function changeText() {
  document.getElementById("text").innerText = "Text changed using JavaScript!";
  showPopup("You just changed the text!");
}

// Example 2: Simple Calculator
function addNumbers() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("result").innerText = "Sum: " + sum;
  showPopup("Calculation complete! The sum is " + sum);
}
