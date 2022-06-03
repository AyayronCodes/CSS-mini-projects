class App {
  canvas = document.getElementById('canvas')
  ctx = this.canvas.getContext('2d')
  decreaseBtn = document.getElementById('decrease')
  increaseBtn = document.getElementById('increase')
  sizeSpan = document.getElementById('size')
  colorInput = document.getElementById('color')
  clearBtn = document.getElementById('clear')
  mouseDown = false
  size = 10
  color = 'black'
  lastPos = {x: null, y: null}

  constructor() {
    this.canvas.addEventListener('mousedown', this.startDraw.bind(this))
    this.canvas.addEventListener('mouseup', () => this.mouseDown   = false)
    this.canvas.addEventListener('mousemove', this.draw.bind(this))
    this.decreaseBtn.addEventListener('click', this.decreaseSize.bind(this))
    this.increaseBtn.addEventListener('click', this.increaseSize.bind(this))
    this.colorInput.addEventListener('change', this.updateColor.bind(this))
    this.clearBtn.addEventListener('click', this.clearCanvas.bind(this))
  }

  // Canvas Draw
  startDraw(e) {
    this.mouseDown = true
    this.lastPos.x = e.offsetX
    this.lastPos.y = e.offsetY
  }
  draw(e) {
    if (!this.mouseDown) return
    const currentPos = this.getCurrentPos(e)
    this.drawCircle(currentPos.x, currentPos.y)
    this.drawLine(this.lastPos.x, this.lastPos.y, currentPos.x, currentPos.y)
    this.updateLastPos(currentPos.x, currentPos.y)
  }
  getCurrentPos(e) {
    return {x: e.offsetX, y: e.offsetY}
  }
  updateLastPos(x, y) {
    this.lastPos.x = x
    this.lastPos.y = y
  }
  drawCircle(x, y) {
    this.ctx.beginPath()
    this.ctx.arc(x, y, this.size / 2, 0, 2 * Math.PI)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
  }
  drawLine(x1, y1, x2, y2) {
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.lineWidth = this.size
    this.ctx.strokeStyle = this.color
    this.ctx.stroke()
  }

  // Controls
  decreaseSize() {
    if (this.size === 5) return
    this.size -= 5
    this.updateSizeSpan(this.size)
  }
  increaseSize() {
    if (this.size === 50) return
    this.size += 5
    this.updateSizeSpan(this.size)
  }
  updateSizeSpan(size) {
    this.sizeSpan.innerText = size
  }
  updateColor() {
    this.color = this.colorInput.value
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

}

const app = new App()