let isDrawing = false

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let x = 0
let y = 0
let width = 10
let height = 10

canvas.addEventListener('mousedown', handleClick)
canvas.addEventListener('mousemove', handleDraw)
canvas.addEventListener('mouseup', endDraw)
canvas.addEventListener('mouseleave', endDraw)

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

resizeCanvas()

window.addEventListener('resize', resizeCanvas)

function handleClick(event) {
  if (event.button === 0) {
    isDrawing = true
    x = event.offsetX
    y = event.offsetY
    ctx.fillRect(
      x - Math.floor(width / 2),
      y - Math.floor(height / 2),
      width,
      height
    )
    console.log(x, y)
  }
}

function handleDraw(event) {
  if (isDrawing) {
    x = event.offsetX
    y = event.offsetY
    ctx.fillRect(
      x - Math.floor(width / 2),
      y - Math.floor(height / 2),
      width,
      height
    )
    console.log(x, y)
  }
}

function endDraw() {
  isDrawing = false
}

console.log(canvas)
