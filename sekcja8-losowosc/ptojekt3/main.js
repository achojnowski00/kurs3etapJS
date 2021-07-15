const names = [];
const div = document.querySelector('div');


const addName = (e) => {
  e.preventDefault() // nie odswieza sie strona jak submitujemy input
  const input = document.querySelector('input');
  const name = input.value;
  let git = true // czy imie moze byc dodane (true jak moze być)
  for (let i = 0; i < names.length; i++) {
    if (name.toLowerCase() === names[i].toLowerCase()) {
      git = false;
      alert(names + ' jest juz wpisany');
    }
  }

  if (name != "" && git) {
    names.push(name);
    div.textContent += name + ', ';

    input.value = '';
  }
}

document.querySelector('button').addEventListener('click', addName)