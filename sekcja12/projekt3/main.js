const user = (name = '', age) => {
  let userName = name
  let userAge = age;

  function showname() {
    console.log(`Cze ${userName}, ${userAge >= 18 ? '18+' : '18-'}`);
  }
  return showname
}

const janek = user('Jan', 20);
const test = user('tester', 18);

janek();
test()