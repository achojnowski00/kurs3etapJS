let size = 1;
let orderElement = 1;

const init = () => {
  const list = document.createElement('ul');
  const btn = document.createElement('button');
  btn.textContent = 'dodaj 10 elementów do listy';
  btn.addEventListener('click', createElements);

  document.body.appendChild(btn);
  document.body.appendChild(list);
}

const createElements = () => {
  const list = document.querySelector('ul');
  for(let i = 0; i < 10; i++){
    const elem = document.createElement('li');
    elem.textContent = 'element ' + orderElement;
    elem.style.fontSize = size + 'px';
    list.appendChild(elem);
    size++;
    orderElement++;
  }
}

init()