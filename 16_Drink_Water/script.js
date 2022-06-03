const smallCups = document.querySelectorAll('.cup-small')
const remained = document.querySelector('.remained')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')

smallCups.forEach((cup, clickIndex) => {
  cup.addEventListener('click', () => {
    highlightCups(clickIndex)
    updateBigCup()
    
  })
})

function highlightCups(clickIndex) {
  if (smallCups[clickIndex].classList.contains('full') && (clickIndex === smallCups.length - 1 || !smallCups[clickIndex].nextElementSibling.classList.contains('full'))) {
    clickIndex--
  }

  smallCups.forEach((cup, index) => {
    if (index <= clickIndex) cup.classList.add('full')
    else cup.classList.remove('full')
  })
}

function updateBigCup() {
  const fullRatio = document.querySelectorAll('.full').length / smallCups.length
  const litersRemaining = 2 - 2 * fullRatio
  const fullPercentage = fullRatio * 100
  const bigCupHeight = document.querySelector('.cup').getBoundingClientRect().height

  percentage.style.height = bigCupHeight * fullRatio + 'px'
  percentage.innerText = fullPercentage + '%'

  if (litersRemaining === 0) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  }
  else {
    remained.style.visibility = 'visible'
  }

  liters.innerText = litersRemaining + ' L'

}


// const smallCups = document.querySelectorAll('.cup-small')
// const liters = document.getElementById('liters')
// const percentage = document.getElementById('percentage')
// const remained = document.getElementById('remained')

// updateBigCup();

// smallCups.forEach((cup, idx) => {
//   cup.addEventListener('click', () => highlightCups(idx))
// })

// function highlightCups(idx) {
//   if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
//     idx--
//   }

//   smallCups.forEach((cup, idx2) => {
//     if (idx2 <= idx) {
//       cup.classList.add('full')
//     }
//     else {
//       cup.classList.remove('full')
//     }
//   })

//   updateBigCup()
// }

// function updateBigCup() {
//   const fullCups = document.querySelectorAll('.cup-small.full').length
//   const totalCups = smallCups.length

//   if (fullCups === 0) {
//     percentage.style.visibility = 'hidden'
//     percentage.style.height = 0
//   }
//   else {
//     percentage.style.visibility = 'visible'
//     percentage.style.height = `${fullCups / totalCups * 330}px`
//     percentage.innerText = `${fullCups / totalCups * 100}%`
//   }

//   if (fullCups === totalCups) {
//     remained.style.visibility = 'hidden'
//     remained.style.height = 0
//   }
//   else {
//     remained.style.visibility = 'visible'
//     liters.innerText = `${2 - (250 * fullCups / 1000)} L`
//   }

//   console.log(fullCups)
// }