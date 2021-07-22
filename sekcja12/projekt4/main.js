const timer = () => {
  let counter = 0;
  document.body.textContent = `0 s`

  function addSec() {
    setTimeout(() => { //   <<<
      counter++;
      document.body.textContent = `${counter}s`
      addSec(); //     <<<
    }, 1000); //    <<<
  }
  return addSec;
}

const qwe = timer();
//    >>>     setInterval(qwe, 1000);
qwe(); //    <<<