const btn = document.querySelector('button')
const sec = document.querySelector('section')

const chars = 'ABCDEFGHIJK0123456789'


const codeQuan = 1000;
const codeLenght = 10;


const codeGenerator = () => {
  for (let i = 0; i < codeQuan; i++) {
    let code = '';
    for (let x = 0; x < codeLenght; x++) {
      const char = Math.floor(Math.random() * chars.length)
      code += chars[char];
    }
    const div = document.createElement('div');
    div.textContent = code;
    sec.appendChild(div);
  }
}


btn.addEventListener('click', codeGenerator)