const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input')

const listUpdate = () => {
  ul.textContent = '';
  toDoList.forEach((toDoElement, key) => {
    toDoElement.id = key;
    ul.appendChild(toDoElement);
  })
}

const removeTask = (e) => {
  const index = e.target.parentNode.id;
  toDoList.splice(index, 1)
  console.log(toDoList)
  taskNumber.textContent = listItems.length;
  listUpdate()
}

const addTask = (e) => {
  e.preventDefault();
  const task = input.value;
  if (task != '') {
    const elem = document.createElement('li')
    elem.className = 'task';
    elem.innerHTML = task + " <button>Usuń</button>"

    toDoList.push(elem);
    listUpdate()

    ul.appendChild(elem);
    input.value = '';
    // const listItems = document.querySelectorAll('li.task');
    taskNumber.textContent = listItems.length;
    elem.querySelector('button').addEventListener('click', removeTask)
  }
}

form.addEventListener('submit', addTask)