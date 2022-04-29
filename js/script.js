const expressionDisplay = document.querySelector('.expression-display');
const numberDisplay = document.querySelector('.number-display');
const numbersPad = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
const operate = document.querySelector('.equal');

let dotCounter = 0;
let displayArray = [];
let fromIndex = 1;
let toIndex = 0;

function clearDisplay() {
  displayArray = [];
  expressionDisplay.value = '';
  numberDisplay.value = 0;
  dotCounter = 0;
}

clearBtn.addEventListener('click', clearDisplay)

function backspace() {
  displayArray.pop();
  dotCounter = displayArray.length; 
    numberDisplay.value = displayArray.join("");
    if(displayArray.length < 1) {
      numberDisplay.value = 0;
    }
}

backspaceBtn.addEventListener('click', backspace)

function moveArrayValues(array, from, to){
  // remove value form array and store it in a variable
  const value = array.splice(from, 1);
  // add removed value to another array position
  array.splice(to, 0, value);
}

function displayNumber(number) {
  const key = number.getAttribute('data-key');
  displayArray.push(key);
  numberDisplay.value = displayArray.join("");
}

numbersPad.forEach((number) => {
  number.addEventListener('click', function() {
    if(displayArray.length < 18) {
      displayNumber(this)
    } else {
      return
    }
  })
});


operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    const key = operator.getAttribute('data-key');
    expressionDisplay.value = `${displayArray.join("")} ${key} `;
    displayArray = [];
    dotCounter = 0;
  })
})

operate.addEventListener('click', () => {
  expressionDisplay.value += `${displayArray.join("")} =`;
  const expression = expressionDisplay.value;
  const operands = expression.replace(/[+\-÷x]/g, ",").replace(/[= ]/g, "").split(",");
  const operator = expression.match(/[+\-÷x]/g).join("");
  switch(operator) {
    case '+':
      return add(operands);
      break;
    case '-':
      return subtract(operands);
      break;
    case 'x':
      return multiply(operands);
      break;
    case '÷':
      return divide(operands);
  }
})

function add(operands) {
  const calc = operands.reduce((total, operand) => {
    return total += +operand
  },0);
  numberDisplay.value = calc;
  displayArray = [];
}

function subtract(operands) {
  const calc = operands.reduce((first, second) => {
    return first - second
  });
  numberDisplay.value = calc;
  displayArray = [];
}

function multiply(operands) {
  const calc = operands.reduce((first, second) => {
    return first * second
  });
  numberDisplay.value = calc;
  displayArray = [];
}

function divide(operands) {
  const calc = operands.reduce((first, second) => {
    return first / second
  });
  numberDisplay.value = calc;
  displayArray = [];
}

function percentage(number, percentage) {
  if(operator === 'multiply' || operator === 'division') {
    return percentage / 100
  } 
  else if(operator === 'add' || operator === 'subtract') {
    return number * (percentage / 100)
  }

} 

function exponentiation(a, b = 2) {
  return a ** b
}






























// COLOR MODE STYLE
const body = document.querySelector('.body');
const darkIcon = document.querySelector('.dark-color-theme');
const lightIcon = document.querySelector('.light-color-theme');

lightIcon.addEventListener('click', () => {
  lightIcon.style.display = 'none';
  darkIcon.style.display = 'block';
  body.classList.add('light');
  body.classList.remove('dark');
})

darkIcon.addEventListener('click', () => {
  darkIcon.style.display = 'none';
  lightIcon.style.display = 'block';
  body.classList.add('dark');
  body.classList.remove('light');
})




































