const button = document.querySelector('.ripple')

button.addEventListener('click', function(e) {
  const clickX = e.clientX
  const clickY = e.clientY

  const buttonLeft = e.target.offsetLeft
  const buttonTop = e.target.offsetTop

  
  const rippleX = clickX - buttonLeft
  const rippleY = clickY - buttonTop

  const ripple = document.createElement('span')
  ripple.classList.add('circle')
  ripple.style.top = rippleY + 'px'
  ripple.style.left = rippleX + 'px'

  button.append(ripple)

  ripple.addEventListener('animationend', () => this.removeChild(ripple))
})


// const buttons = document.querySelectorAll('.ripple')

// buttons.forEach(button => {
//   button.addEventListener('click', function(e) {
//     const x = e.clientX
//     const y = e.clientY

//     const buttonTop = e.target.offsetTop
//     const buttonLeft = e.target.offsetLeft

//     const xInside = x - buttonLeft
//     const yInside = y - buttonTop

//     const circle = document.createElement('span')
//     circle.classList.add('circle')
//     circle.style.top = yInside + 'px'
//     circle.style.left = xInside + 'px'

//     this.appendChild(circle)

//     this.addEventListener('animationend', () => {
//       buttons[0].removeChild(circle)
//     })
//   })
// })