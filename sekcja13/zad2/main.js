const urDate = '2021-08-27 16:00:00'

const endTime = new Date(urDate).getTime(0);

const spnD = document.querySelector('span.d')
const spnH = document.querySelector('span.h')
const spnM = document.querySelector('span.m')
const spnS = document.querySelector('span.s')



setInterval(() => {
  const nowTime = new Date().getTime();
  const time = endTime - nowTime;

  //  ---------------------------------------------------
  //  deklaracja dni godzin minut i sekund w formie     |
  //  const zmienna = podloga( time % mod < 10)         |
  //  zmienna = zmienna < 10 ? `0${zmienna}` : zmienna  |
  //  ---------------------------------------------------
  let days = Math.floor(time / (1000 * 60 * 60 * 24))
  let hours = (Math.floor(time / (1000 * 60 * 60)) % 24);
  hours = hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor(time / (1000 * 60)) % 60;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor(time / (1000)) % 60;
  seconds = seconds < 10 ? `0${seconds}` : seconds;


  // ---------------------------------
  //  przypisanie wartości do spana  |
  // ---------------------------------
  spnD.textContent = days
  spnH.textContent = hours
  spnM.textContent = minutes
  spnS.textContent = seconds
}, 1000);