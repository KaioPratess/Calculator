const body = document.querySelector('.body');
const expressionDisplay = document.querySelector('.expression-display');
const numberDisplay = document.querySelector('.number-display');
export const numbersPad = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
const operateBtn = document.querySelector('.equal');
const polarityBtn = document.querySelector('.polarity');
const percentageBtn = document.querySelector('.percentage');
const exponentiationBtn = document.querySelector('.exponentiation');
const comma = document.querySelector('.dot');

let displayArray = [];

// DISPLAY NUMBERS

function displayNumber(number) {
  const key = number.getAttribute('data-key');
  displayArray.push(key);
  numberDisplay.value = displayArray.join("");
}

numbersPad.forEach((number) => {
  number.addEventListener('click', function() {
    displayNumber(this)
    if(displayArray.length > 15) {
      displayArray.pop()
    }
  });
});

function onKeyDown(event) {
  numbersPad.forEach((number)=> {
    const key = number.getAttribute('data-key');
    if(event.key === key) {
      displayArray.push(key);
      numberDisplay.value = displayArray.join("");
    }
  });

  operators.forEach((operator) => {
    const key = operator.getAttribute('data-key');
    if(event.key === key) {
      if(expressionDisplay.value === '') {
        expressionDisplay.value = `${numberDisplay.value} ${key} `;
        displayArray = [];
      } else {
        operate()
        expressionDisplay.value = `${numberDisplay.value} ${key} `;
        displayArray = [];
      }
    }
  })
  if(displayArray.length > 15) {
    displayArray.pop()
  }
  switch(event.key) {
    case 'Backspace':
      backspace()
      break;
    case 'Enter':
      operate()
      break;
    case '.':
      addDot()
      break;
    case 'Delete':
      clearDisplay()
  }
}


document.addEventListener('keydown', onKeyDown);


function displayExp(operator) {
  const key = operator.getAttribute('data-key');
  if(expressionDisplay.value === '') {
    expressionDisplay.value = `${numberDisplay.value} ${key} `;
    displayArray = [];
  } else {
    operate()
    displayArray = [];
    expressionDisplay.value = `${numberDisplay.value} ${key} `;
  }
}

operators.forEach((operator) => {
  operator.addEventListener('click', function () {
    displayExp(this);
  })
})

// CALCULATIONS
function add(...operands) {
  const calc = operands.reduce((total, operand) => {
    return total += +operand
  },0);
  numberDisplay.value = calc;
  displayArray = [];
}

function subtract(...operands) {
  const calc = operands.reduce((first, second) => {
    return first - second
  });''
  numberDisplay.value = calc;
  displayArray = [];
}

function multiply(...operands) {
  const calc = operands.reduce((first, second) => {
    return first * second
  });
  numberDisplay.value = calc;
  displayArray = [];
}

function divide(...operands) {
  const calc = operands.reduce((first, second) => {
    return first / second
  });
  numberDisplay.value = calc;
  displayArray = [];
}

function percentage() {
  const expression = expressionDisplay.value;
  const expToArray = expression.split(" ");
  const a = expToArray.slice(0,1).join("");
  const b = displayArray.join("");
  const operator = expToArray.slice(1, 2).join("");
  if(operator === 'x' || operator === '÷') {
    displayArray = [(b / 100).toFixed(2)];
    numberDisplay.value = displayArray;
  }
  else if(operator === '+' || operator === '-') {
    displayArray = [(a * (b / 100)).toFixed(2)];
    numberDisplay.value = displayArray;
  }
} 

percentageBtn.addEventListener('click', percentage);

function exponentiation() {
  const number = displayArray.join("");
  expressionDisplay.value = `sqr(${number})`;
  numberDisplay.value = (+number) ** 2;
  displayArray = [];
}

exponentiationBtn.addEventListener('click', exponentiation)

function operate() {
  const expression = expressionDisplay.value.split(" ");
  if(expression[2] === "") {
    expressionDisplay.value += `${displayArray.join("")}`;
    const compExpression = expressionDisplay.value;
    const expToArray = compExpression.split(" ");
    console.log(expToArray)
    const a = expToArray.slice(0,1).join("");
    const b = expToArray.slice(2, 3).join("");
    const operator = expToArray.slice(1, 2).join("");
      switch(operator) {
        case '+':
          return add(a, b);
          break;
        case '-':
          return subtract(a, b);
          break;
        case 'x':
          return multiply(a, b);
          break;
        case '÷':
          return divide(a, b);
     }
  }
}

operateBtn.addEventListener('click', operate);

// CLEAR
function clearDisplay() {
  displayArray = [];
  expressionDisplay.value = '';
  numberDisplay.value = 0;
}

clearBtn.addEventListener('click', clearDisplay);

// BACKSPACE
function backspace() {
  displayArray.pop();
    numberDisplay.value = displayArray.join("");
    if(displayArray.length < 1) {
      numberDisplay.value = 0;
    }
}

backspaceBtn.addEventListener('click', backspace);

// CHANGE POLARITY
function changePolarity() {
  if(displayArray.includes('-')) {
    displayArray.shift('-');
  } else {
    displayArray.unshift('-');
  }
  numberDisplay.value = displayArray.join("");
}

polarityBtn.addEventListener('click', changePolarity);

function addDot() {
  if(displayArray.includes('.')) {
    return
  } else {
    displayArray.push('.');
    numberDisplay.value = displayArray.join("");
  }
}

comma.addEventListener('click', addDot)

// COLOR MODE STYLE
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
