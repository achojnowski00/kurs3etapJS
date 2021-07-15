const btnAdder = document.querySelector('button');

let counter = 0;
const addElement = function(){
  counter++;
  console.log(counter);
  const newDiv = document.createElement("div");
  newDiv.textContent = counter;
  if(counter % 5 == 0){
    newDiv.classList.add('circle');
  }
  document.body.appendChild(newDiv);
}

btnAdder.addEventListener('click', addElement)