const body = document.querySelector('.body');
const dark = document.querySelector('.select-dark');
const light = document.querySelector('.select-light');

dark.addEventListener('click', () => {
  body.classList.add("dark");
  body.classList.remove("light");
})

light.addEventListener('click', () => {
  body.classList.add("light");
  body.classList.remove("dark");
})