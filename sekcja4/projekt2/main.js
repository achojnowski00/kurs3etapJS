document.body.style.height = '10000px';


// creating top banner with styles and append it
const newDiv = document.createElement('div');
newDiv.style.width = '100%';
newDiv.style.position = 'fixed';
newDiv.style.top = 0;
newDiv.style.left = 0;

let size = 50;
newDiv.style.height = size + 'px';
// newDiv.style.backgroundColor = 'green';
newDiv.style.transition = '.2s';

document.body.appendChild(newDiv)
// end of creating banner

const speed = 10;
let grow = true;
function changeSize(){
  if((size < window.innerHeight / 2 ) && grow == true){
    newDiv.style.backgroundColor = 'green';
    size += speed;
    newDiv.style.height = size + 'px';
  }else if(size >= 0){
    grow = false
    size -= speed;
    newDiv.style.height = size + 'px';
    newDiv.style.backgroundColor = 'red';
  }else{
    grow = true;
  }
}

window.addEventListener('scroll', changeSize)
