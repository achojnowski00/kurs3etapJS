const input = document.getElementById('pass')
const div = document.querySelector('.message')
const showButton = document.querySelector('.show')

const password = ['jeDEn', 'DwA', 'trZy']
const message = ['działa', 'gitówa', 'i w ogole']

input.addEventListener('focus', function (e) {
  e.target.classList.add('active');
})
input.addEventListener('blur', function (e) {
  e.target.classList.remove('active');
})



input.addEventListener('input', function (e) {
  const text = e.target.value;
  for (let i = 0; i < password.length; i++) {
    if (text.toLowerCase() == password[i].toLowerCase()) {
      div.textContent = message[i]
      e.target.value = '';
    }
  }

  // password.forEach((password, index) => {
  //   if (password.toLowerCase() == text.toLowerCase()) {
  //     div.textContent = message[index]
  //     e.target.value = '';
  //   }
  // })

  // password.forEach((password, index) => {
  //   if (password.toUpperCase() == text.toUpperCase()) {
  //     div.textContent = message[index]
  //     e.target.value = '';
  //   }
  // })


})

showButton.addEventListener('click', function () {
  const inputType = input.getAttribute('type');
  if (inputType == 'password')
    input.setAttribute('type', 'text');
  else
    input.setAttribute('type', 'password');

})