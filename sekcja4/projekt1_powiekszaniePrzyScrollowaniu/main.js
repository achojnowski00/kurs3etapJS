const squere = document.createElement('div');

let size = 10;
squere.style.width = size + 'px';
squere.style.height = size + 'px';

document.body.appendChild(squere);

//max width
//window.innerWidth * .5

let direction = true;
window.addEventListener('scroll', function(){

  if((size < window.innerHeight * .5) && direction == true) {
    size += 10;
    squere.style.width = size + 'px';
    squere.style.height = size + 'px';
  }else if(size > 0){
    direction = false;
    size -= 10;
    squere.style.width = size + 'px';
    squere.style.height = size + 'px';
  }else{
    direction = true;
  }
})