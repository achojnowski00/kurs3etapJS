document.body.addEventListener('click', function (e) {
  const x = e.clientX;
  const y = e.clientY;

  // moja wersja
  const red = x % 255;
  const green = y % 255;
  const blue = (x + y) % 255;

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`



  // wersja samuraja
  // if (x % 2 == 0 && y % 2 == 0) {
  //   document.body.style.backgroundColor = 'red'
  // } else if (x % 2 == 1 && y % 2 == 1) {
  //   document.body.style.backgroundColor = 'blue'
  // } else {
  //   document.body.style.backgroundColor = 'green'
  // }
})