const boxes = document.querySelectorAll('.box')


window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  boxes.forEach(box => {
    console.log(box.getBoundingClientRect())
    if (box.getBoundingClientRect().top < window.innerHeight /5 * 4) box.classList.add('show')
    else box.classList.remove('show')
  })
}

checkBoxes();

// const boxes = document.querySelectorAll('.box');

// checkBoxes();

// window.addEventListener('scroll', checkBoxes);


// function checkBoxes() {
//   const triggerBottom = window.innerHeight / 5 * 4;

//   boxes.forEach(box => {
//     const boxTop = box.getBoundingClientRect().top;
//     if (boxTop < triggerBottom) {
//       box.classList.add('show');
//     } else {
//       box.classList.remove('show');
//     }
  
//   })
// }