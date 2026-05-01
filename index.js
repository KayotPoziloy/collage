let isDrawing = false

const color = document.querySelector('#brushColor')
const imageCheckbox = document.querySelector('#imageBrush')
const brushSizeElement = document.querySelector('#brushSize')
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const image = new Image()

image.src =
  'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Daria_Morgendorffer.png/250px-Daria_Morgendorffer.png'

let x = 0
let y = 0
let width = brushSizeElement.value
let height = brushSizeElement.value
let imageWidth = image.width
let imageHeight = image.height
let currentColor = color.value
let isImageDraw = false
let aspectRatio = imageWidth / imageHeight

canvas.addEventListener('mousedown', handleClick)
canvas.addEventListener('mousemove', handleMove)

canvas.addEventListener('mouseup', endDraw)
canvas.addEventListener('mouseleave', endDraw)
color.addEventListener('change', changeCurrentColor)
imageCheckbox.addEventListener('click', () => {
  isImageDraw = imageCheckbox.checked
})
brushSizeElement.addEventListener('change', () => {
  width = brushSizeElement.value
  height = brushSizeElement.value
})

// function resizeCanvas() {
//   canvas.width = 5000
//   canvas.height = 5000
// }

// resizeCanvas()

function changeCurrentColor(event) {
  currentColor = event.target.value
}

function handleClick(event) {
  if (event.button === 0) {
    isDrawing = true

    draw(event)
  }
}

function handleMove(event) {
  if (isDrawing) {
    draw(event)
  }
}

function draw(event) {
  if (isImageDraw) {
    x = event.offsetX - Math.floor(width / 2)
    y = event.offsetY - Math.floor(width / aspectRatio / 2)
    ctx.drawImage(image, x, y, width, width / aspectRatio)
  } else {
    x = event.offsetX
    y = event.offsetY
    ctx.fillStyle = currentColor
    ctx.fillRect(
      x - Math.floor(width / 2),
      y - Math.floor(height / 2),
      width,
      height,
    )
  }
}

function endDraw() {
  isDrawing = false
}
