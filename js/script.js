// COLOR MODE STYLE
const body = document.querySelector('.body');
const darkIcon = document.querySelector('.dark-color-mode');
const lightIcon = document.querySelector('.light-color-mode');

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




































