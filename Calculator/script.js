let display = document.getElementById("display");
let memory = 0;

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function appendConstant(constant) {
  display.value += constant;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Scientific functions
function square() {
  if (display.value) display.value = Math.pow(eval(display.value), 2);
}

function sqrt() {
  if (display.value) display.value = Math.sqrt(eval(display.value));
}

function sin() {
  if (display.value) display.value = Math.sin(toRadians(eval(display.value))).toFixed(6);
}

function cos() {
  if (display.value) display.value = Math.cos(toRadians(eval(display.value))).toFixed(6);
}

function tan() {
  if (display.value) display.value = Math.tan(toRadians(eval(display.value))).toFixed(6);
}

function log() {
  if (display.value) display.value = Math.log10(eval(display.value)).toFixed(6);
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

// Memory functions
function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  display.value += memory;
}

function memoryAdd() {
  if (display.value) memory += eval(display.value);
}

function memorySubtract() {
  if (display.value) memory -= eval(display.value);
}
function memoryStore() {
    if (display.value) memory = eval(display.value);
}
