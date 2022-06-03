const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const buttons = document.getElementById('buttons')

function stopSounds() {
  sounds.forEach(sound => {
    document.getElementById(sound).pause();
    document.getElementById(sound).currentTime = 0;
  })
}

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound
  buttons.append(btn)
  btn.addEventListener('click', () => {
    stopSounds();
    document.getElementById(sound).play();
  })


})




// sounds.forEach(sound => {
//   const btn = document.createElement('button')
//   btn.classList.add('btn')

//   btn.innerText = sound

//   btn.addEventListener('click', () => {
//     stopSongs()

//     document.getElementById(sound).play();
//   })

//   document.getElementById('buttons').appendChild(btn)
// })

// function stopSongs() {
//   sounds.forEach(sound => {
//     const song = document.getElementById(sound);

//     song.pause();
//     song.currentTime = 0;
//   })
// }