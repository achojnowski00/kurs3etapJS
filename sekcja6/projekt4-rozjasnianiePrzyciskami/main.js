let color = 128;
const speed = 5;

document.body.style.backgroundColor = `rgb(${color},${color},${color})`



// window.addEventListener('keydown', changeColor)
window.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowUp') {
    color += speed;
    if (color > 255) color = 255;
    document.body.style.backgroundColor = `rgb(${color},${color},${color})`
  } else if (e.key == 'ArrowDown') {
    color -= speed;
    if (color < 0) color = 0;
    document.body.style.backgroundColor = `rgb(${color},${color},${color})`
  }
})