const spnText = document.querySelector('.text')
const txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, ex commodi neque, possimus quibusdam tempore hic, officiis illum quis esse culpa obcaecati in at ipsam dolores dolorem enim molestiae id?'


let indexText = 0;
const time = 50;

const addLetter = () => {
  spnText.textContent += txt[indexText];
  indexText++;
  if (indexText >= txt.length) clearInterval(typingIndex)
}

const cursorAnimation = () => {
  document.querySelector('.cursor').classList.toggle('active')
}

const typingIndex = setInterval(addLetter, time);
setInterval(cursorAnimation, 450);