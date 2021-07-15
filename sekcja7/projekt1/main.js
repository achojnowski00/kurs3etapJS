const input = document.getElementById('pass')
const div = document.querySelector('.message')
const showButton = document.querySelector('.show')

const password = ['user', 'wiosna']
const message = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, dolorem.', 'hsjkdv efhwf hilebkljfbwlewi hfuiehfuiewh i ghweqi']

input.addEventListener('focus', function (e) {
  e.target.classList.add('active');
})
input.addEventListener('blur', function (e) {
  e.target.classList.remove('active');
})



input.addEventListener('input', function (e) {
  // console.log(e.target.value);
  // if (password == e.target.value) {
  //   div.textContent = message
  //   e.target.value = ''
  // } else {
  //   div.textContent = ''
  // }
  const text = e.target.value;
  // for (let i = 0; i < password.length; i++) {
  //   if (text == password[i]) {
  //     div.textContent = message[i]
  //     e.target.value = '';
  //   }
  // }

  password.forEach((password, index) => {
    if (password == text) {
      div.textContent = message[index]
      e.target.value = '';
    }
  })


})

showButton.addEventListener('click', function () {
  const inputType = input.getAttribute('type');
  if (inputType == 'password')
    input.setAttribute('type', 'text');
  else
    input.setAttribute('type', 'password');

})