document.body.addEventListener('mousemove', function (event) {
  // console.log(event.clientX, event.clientY)
  // document.querySelector('h1').textContent = event.clientX + ', ' + event.clientY;
  const x = event.clientX;
  const y = event.clientY;
  const width = window.innerWidth
  const height = window.innerHeight

  const red = x / width * 100;
  const green = y / height * 100;
  const blue = (red + green) % 255;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`
  // document.querySelector('h1').textContent = x + ', ' + y;
  // document.querySelector('h1').textContent = x + ', ' + y;
  // document.body.style.backgroundColor = `rgb(${x % 255}, ${y % 255}, ${(x + y) % 255})`
})

document.body.addEventListener('mouseleave', (event) => {
  document.querySelector('h1').textContent = 'Rusz myszką';
  document.body.style.backgroundColor = 'white'
})