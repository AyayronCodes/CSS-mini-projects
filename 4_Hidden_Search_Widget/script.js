const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  document.querySelector('.input').focus();
})



// const search = document.querySelector('.search');
// const btn = document.querySelector('.btn');
// const input = document.querySelector('.input');

// btn.addEventListener('click', ()=> {
//   search.classList.toggle('active');
//   input.focus();
// })