// function x() {
//   let number = 0;

//   function y() {
//     console.log(number);
//   }
//   return y;
// }

// const example = x();

// example();

const add = (start = 0) => {
  let number = start;
  return () => {
    number++;
    document.body.textContent = `stan: ${number}`
  }
}

const counter = add();
// const counterFrom5 = add(5);
document.addEventListener('click', counter);
// document.addEventListener('click', counterFrom5);