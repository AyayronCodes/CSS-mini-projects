const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let progress = 0;
let blur = 70;

const int = setInterval(() => {
  progress++
  loadText.innerText = progress + '%';
  loadText.style.opacity = window.getComputedStyle(loadText).opacity - 0.01;
  bg.style.filter = `blur(${blur -= 0.7}px)`
  if (progress !== 100) return;
  clearInterval(int);

}, 30);






// const loadText = document.querySelector('.loading-text');
// const bg = document.querySelector('.bg');

// let load = 0;

// let int = setInterval(blurring, 30);

// function blurring() {
//   load++;

//   if (load > 99) {
//     clearInterval(int);
//   }
  
//   loadText.innerText = `${load}%`
//   loadText.style.opacity = 
// }