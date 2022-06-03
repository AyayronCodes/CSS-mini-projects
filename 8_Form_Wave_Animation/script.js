const labels = document.querySelectorAll('label');

labels.forEach(label => {
  label.innerHTML = label.innerText.split('').map((char, index) => `<span style="transition-delay: ${index * 50}ms;">${char}</span>`).join('')
})






// const labels = document.querySelectorAll('.form-control label')

// labels.forEach(label => {
//   label.innerHTML = label.innerText
//     .split('')
//     .map((char, index) => `<span style="transition-delay: ${index * 50}ms;">${char}</span>
//     `).join('')
// })
