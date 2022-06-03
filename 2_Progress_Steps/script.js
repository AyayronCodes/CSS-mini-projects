class ProgressStepsApp {
  prevBtn = document.getElementById('prev')
  nextBtn = document.getElementById('next')
  circles
  progressContainer = document.querySelector('.progress-container')
  progress = document.getElementById('progress')
  currentStep = 1

  constructor(numSteps) {
    this.numSteps = numSteps
    this.init()
  }

  createStep(index) {
    const markup = `
      <div class="circle">${index}</div>
    `

    this.progressContainer.insertAdjacentHTML('beforeend', markup)
  }

  update() {
    if (this.currentStep === 1) {
      this.prevBtn.disabled = true
    } else if (this.currentStep === this.circles.length) {
      this.nextBtn.disabled = true
    } else {
      this.prevBtn.disabled = this.nextBtn.disabled = false
    }

    this.progress.style.width = (this.currentStep - 1) / (this.circles.length - 1) * 100 + '%'

    this.circles.forEach((circle, index) => {
      if (index < this.currentStep) {
        circle.classList.add('active')
        return
      }

      circle.classList.remove('active')
    })
  }

  init() {
    // create steps
    for (let i = 0; i < this.numSteps; i++) {
      this.createStep(i + 1)
    }
    // put active on first step
    this.circles = document.querySelectorAll('.circle')
    this.circles[0].classList.add('active')
    // attach event listeners
    this.nextBtn.addEventListener('click', () => {
      this.currentStep++

      if (this.currentStep > this.circles.length) this.currentStep = this.circles.length

      this.update()
    })
    this.prevBtn.addEventListener('click', () => {
      this.currentStep--

      if (this.currentStep < 1) this.currentStep = 1

      this.update()
    })
  }
}

const progressStepsApp = new ProgressStepsApp(6)

