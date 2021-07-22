let number = 0;

const add = () => {
  number++;
  document.body.textContent = `stan: ${number}`
}

document.addEventListener('click', add)