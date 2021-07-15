const btnAdder = document.querySelector('button');

let counter = 1;
btnAdder.addEventListener('click',  function(){
  const newListElement = document.createElement('li');
  newListElement.textContent = counter;

  if(counter % 3 == 0) newListElement.classList.add('big')

  document.querySelector('ul').appendChild(newListElement);
  
  counter += 2;
})