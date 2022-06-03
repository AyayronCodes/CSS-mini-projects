const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', () => {
  document.querySelector('html').classList.toggle('dark')
})

function getCurrentTimeDate() {
  const date = new Date()
  return {
    hour: date.getHours(),
    ampm: date.getHours() >= 12 ? 'PM' : 'AM',
    minute: date.getMinutes(),
    second: date.getSeconds(),
    day: date.getDate(),
    month: months[date.getMonth()],
    dayOfWeek: days[date.getDay()],
  }
}

function getSecDeg(sec) {
  return sec * 6
}

function getMinDeg(sec, min) {
  return min * 6 + sec * 0.1
}

function getHourDeg(sec, min, hour) {
  return hour * 30 + min * 0.5 + sec * (30 / 60 / 60)
}

function setHands(secDeg, minDeg, hourDeg) {
  secondEl.style.transform = `translate(-50%, -100%) rotate(${secDeg}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minDeg}deg)`
  hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`
}

function init() {
  // get current date time infos
  const {hour, ampm, minute, second, day, month, dayOfWeek} = getCurrentTimeDate()

  // get degrees angle of sec hand
  const secDeg = getSecDeg(second)
  const minDeg = getMinDeg(second, minute)
  const hourDeg = getHourDeg(second, minute, hour)

  // set hands to appropriate angles
  setHands(secDeg, minDeg, hourDeg)

  // show time and date
  timeEl.innerText = `${hour}:${minute < 10 ? '0' + minute : minute} ${ampm}`
  dateEl.innerHTML = `${dayOfWeek}, ${month} <span class='circle'>${day}</span>`
}

setInterval(init, 1000)

// const hourEl = document.querySelector('.hour')
// const minuteEl = document.querySelector('.minute')
// const secondEl = document.querySelector('.second')
// const timeEl = document.querySelector('.time')
// const dateEl = document.querySelector('.date')
// const toggle = document.querySelector('.toggle')

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// toggle.addEventListener('click', (e) => {
//   const html = document.querySelector('html')
//   if (html.classList.contains('dark')) {
//     html.classList.remove('dark')
//     e.target.innerText = 'Dark mode'
//   }
//   else {
//     html.classList.add('dark')
//     e.target.innerText = 'Light mode'
//   }
// })

// function setTime() {
//   const time = new Date()
//   const month = time.getMonth()
//   const day = time.getDay()
//   const date = time.getDate()
//   const hours = time.getHours()
//   const hoursForClock = hours % 12
//   const minutes = time.getMinutes()
//   const seconds = time.getSeconds()
//   const ampm = hours >= 12 ? 'PM' : 'AM'

//   hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
//   minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
//   secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

//   timeEl.innerHTML = `${hoursForClock === 0 ? 12 : hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
//   dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;

// }

// setTime()

// setInterval(setTime, 1000)