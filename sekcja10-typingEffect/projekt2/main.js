const spnText = document.querySelector('.text')
const txt = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, ex commodi neque. ', 'Possimus quibusdam tempore hic, officiis illum quis esse culpa obcaecati.', 'In at ipsam dolores dolorem enim molestiae id?']

let activeLetter = -5;
let activeText = 0;

let indexText = 0;
const time = 1;

const addLetter = () => {
  if (activeLetter >= 0) {
    spnText.textContent += txt[activeText][activeLetter]
  }
  activeLetter++
  if (activeLetter === txt[activeText].length) {

    activeText++;
    if (activeText === txt.length) return;

    return setTimeout(() => {
      activeLetter = -5;
      spnText.textContent = '';
      addLetter();
    }, 200);


  }
  setTimeout(addLetter, 100);
  //}


  // for (let j = 0; j < txt.length; j++) {
  //   for (let i = 0; i < txt[j].length; i++) {
  //     spnText.textContent += txt[j][i];
  //   }
  // }
}

const cursorAnimation = () => {
  document.querySelector('.cursor').classList.toggle('active')
}


addLetter()
setInterval(cursorAnimation, 450);