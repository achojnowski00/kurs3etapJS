let options = ['walcz', 'odpusc sobie'];

const btnAdd = document.querySelector('.add');
const btnRes = document.querySelector('.clean');
const btnShowAd = document.querySelector('.showAdvice');
const btnShowOp = document.querySelector('.showOptions');

const pushAdvice = (e) => {

  e.preventDefault();
  const currentInput = document.querySelector('input').value;
  if (currentInput.length > 0) {
    options.push(currentInput);
    document.querySelector('input').value = "";
    console.log(options);
  }
}

const cleanList = (e) => {
  e.preventDefault();
  options = [];
  console.log(options)
}

const showRandomAdvice = () => {
  let index = Math.floor(Math.random() * options.length);
  const porada = document.querySelector('h1');
  porada.textContent = options[index];
}

const showAll = () => {
  alert(options)
}


btnAdd.addEventListener('click', pushAdvice);
btnRes.addEventListener('click', cleanList);
btnShowAd.addEventListener('click', showRandomAdvice);
btnShowOp.addEventListener('click', showAll);