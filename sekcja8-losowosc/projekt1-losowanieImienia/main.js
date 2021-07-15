const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ['Jagienka', 'Daria', 'Asia', 'Kira', 'Marysia', 'Adam', 'Marcin', 'Piotrek', 'Krzyś'];

const namGenerator = () => {
  const index = Math.floor(Math.random() * names.length)
  div.textContent = `${names[index]} to kox imie`
}

btn.addEventListener('click', namGenerator);