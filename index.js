let isDrawing = false

const color = document.querySelector('#myColor')
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let x = 0
let y = 0
let width = 10
let height = 10
let currentColor = color.value

canvas.addEventListener('mousedown', handleClick)
canvas.addEventListener('mousemove', handleDraw)
canvas.addEventListener('mouseup', endDraw)
canvas.addEventListener('mouseleave', endDraw)
color.addEventListener('change', changeCurrentColor)

function resizeCanvas() {
  canvas.width = 500
  canvas.height = 500
}

resizeCanvas()

function changeCurrentColor(event) {
  currentColor = event.target.value
  console.log(currentColor)
  console.log(event.target.value)
}

function handleClick(event) {
  if (event.button === 0) {
    isDrawing = true
    x = event.offsetX
    y = event.offsetY
    ctx.fillStyle = currentColor
    ctx.fillRect(
      x - Math.floor(width / 2),
      y - Math.floor(height / 2),
      width,
      height,
    )
    console.log(x, y)
  }
}

function handleDraw(event) {
  if (isDrawing) {
    x = event.offsetX
    y = event.offsetY
    ctx.fillStyle = currentColor
    ctx.fillRect(
      x - Math.floor(width / 2),
      y - Math.floor(height / 2),
      width,
      height,
    )
    console.log(x, y)
  }
}

function endDraw() {
  isDrawing = false
}

// console.log(canvas)
