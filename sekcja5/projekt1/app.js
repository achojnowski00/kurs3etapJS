const btn = document.querySelector('button');
const listElems = document.querySelectorAll('li')

let fsize = 16;


btn.addEventListener('click', function () {
  if (btn.textContent == 'Start') {
    btn.textContent = 'Powieksz font-size'
    for (let i = 0; i < listElems.length; i++) {
      listElems[i].style.display = 'block';
    }
  } else {
    fsize++;
    for (let i = 0; i < listElems.length; i++) {
      listElems[i].style.fontSize = fsize + 'px';
    }
  }
})