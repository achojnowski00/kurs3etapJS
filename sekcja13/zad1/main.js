const time = new Date()
const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds(0);
const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

document.querySelector('.clock span').textContent = `${hours}:${minutes}:${seconds}`

const clock = () => {
  const time = new Date()

  // console.log(time.toLocaleTimeString())

  const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds(0);
  const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

  document.querySelector('.clock span').textContent = `${hours}:${minutes}:${seconds}`
}

setInterval(clock, 1000);