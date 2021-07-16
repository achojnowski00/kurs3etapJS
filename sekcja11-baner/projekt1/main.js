const slideList = [{
    img: "images/img1.jpg",
    text: 'pierwszy text'
  },

  {
    img: "images/img2.jpg",
    text: 'drugi text'
  },
  {
    img: "images/img3.jpg",
    text: 'trzeci text'
  }
];


const image = document.querySelector('img.slider');
const heading = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];



//interface
const time = 5000;
let active = 0;

//implementacja
const changeDot = () => {
  const activeDot = dots.findIndex(dots => dots.classList.contains('active'));
  dots[activeDot].classList.remove('active')
  dots[active].classList.add('active')
}

const changeSlide = () => {
  active++;
  if (active >= slideList.length) active = 0;
  image.src = slideList[active].img;
  heading.textContent = slideList[active].text;
  changeDot();
}
let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval);
    e.keyCode == 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }

    if (active >= slideList.length) active = 0;
    image.src = slideList[active].img;
    heading.textContent = slideList[active].text;
    changeDot();

    indexInterval = setInterval(changeSlide, time);
  }
}


window.addEventListener('keydown', keyChangeSlide)