const expressionDisplay = document.querySelector('.expression-display');
const numberDisplay = document.querySelector('.number-display');
const numbersPad = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');

let displayArray = [];

clearBtn.addEventListener('click', () => {
  displayArray = [0];
  numberDisplay.value = displayArray.join("");
})


numbersPad.forEach((number) => {
  number.addEventListener('click', () => {
    const key = number.getAttribute('data-key');
    displayArray.push(key);
    numberDisplay.value = displayArray.join("");
  })
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    const key = operator.getAttribute('data-key');
    displayArray.push(key);
    numberDisplay.value = displayArray.join("");
  })
})










function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
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




































