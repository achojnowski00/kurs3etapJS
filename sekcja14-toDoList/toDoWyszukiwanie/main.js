const input = document.querySelector('input');
const ul = document.querySelector('ul');
const lis = document.querySelectorAll('li');

const search = (e) => {
  const searchText = e.target.value.toLowerCase()
  let tasks = [...lis];
  // console.log('-----------')
  // console.log(tasks)
  tasks = tasks.filter((li) => li.textContent.toLocaleLowerCase().includes(searchText))
  // console.log(tasks)
  ul.textContent = '';
  tasks.forEach((li) => ul.appendChild(li));
}


input.addEventListener('input', search);