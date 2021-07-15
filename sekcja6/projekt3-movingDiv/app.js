//document.querySelector('div').offsetTop
//document.querySelector('div').offsetleft

const div = document.querySelector('div');

let divX = 0;
let divY = 0;

// Gdzie kliekneliśmy względem okna
let insertdivX;
let insertdivY;


// Gdzie kliekneliśmy względem elementu
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;


let active = false;
div.addEventListener('mousedown', (e) => {
  div.style.backgroundColor = 'gray'
  active = true;

  insertdivX = e.offsetX
  insertdivY = e.offsetY
})

div.addEventListener('mousemove', (e) => {
  if (active) {
    divX = e.clientX;
    divY = e.clientY;

    div.style.left = `${divX - insertdivX}px`;
    div.style.top = `${divY - insertdivY}px`;
  }
})

div.addEventListener('mouseup', () => {
  div.style.backgroundColor = 'black'
  active = false
})









// div.addEventListener('touchmove', function (e) {
//   const x = e.clientX;
//   const y = e.clientY;
//   div.style.backgroundColor = 'red';
//   div.addEventListener('click', function () {
//     div.style.backgroundColor = 'red';
//     div.style.top = x + 'px';
//     div.style.left = y + 'px';
//   })
//   console.log(x, y)
// })