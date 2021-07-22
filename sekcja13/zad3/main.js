const btnStart = document.querySelector('.main')
const btnReset = document.querySelector('.reset')
const panel = document.querySelector('.time div')

let time = 0;
let active = false;
let idI;

const timer = () => {
  if (!active) {
    active = true;
    btnStart.textContent = 'Pauza';
    idI = setInterval(start, 10);
  } else {
    active = false;
    btnStart.textContent = 'Start';
    clearInterval(idI)
  }
}

const start = () => {
  time++;
  panel.textContent = (time / 100).toFixed(2);
  // console.log((time / 100).toFixed(2));
}

const reset = () => {
  btnStart.textContent = 'Start';
  time = 0;
  panel.textContent = '---';
  active = false;
  clearInterval(idI);
}


btnStart.addEventListener('click', timer)
btnReset.addEventListener('click', reset)