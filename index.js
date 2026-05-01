let isDrawing = false

const color = document.querySelector('#brushColor')
const imageCheckbox = document.querySelector('#imageBrush')
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const image = new Image()

image.src =
  'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Daria_Morgendorffer.png/250px-Daria_Morgendorffer.png'

console.log(image)
console.log(image.height, image.width)

let x = 0
let y = 0
let width = 10
let height = 10
let imageWidth = image.width
let imageHeight = image.height
let currentColor = color.value
let isImageDraw = false

canvas.addEventListener('mousedown', handleClick)
canvas.addEventListener('mousemove', handleDraw)

canvas.addEventListener('mouseup', endDraw)
canvas.addEventListener('mouseleave', endDraw)
color.addEventListener('change', changeCurrentColor)
imageCheckbox.addEventListener('click', () => {
  isImageDraw = imageCheckbox.checked
  console.log(isImageDraw)
})

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

    if (isImageDraw) {
      x = event.offsetX - Math.floor(imageWidth / 2)
      y = event.offsetY - Math.floor(imageHeight / 2)
      ctx.drawImage(image, x, y)
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

    console.log(x, y)
  }
}

function handleDraw(event) {
  if (isDrawing) {
    if (isImageDraw) {
      x = event.offsetX - Math.floor(imageWidth / 2)
      y = event.offsetY - Math.floor(imageHeight / 2)
      ctx.drawImage(image, x, y)
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

    console.log(x, y)
  }
}

function endDraw() {
  isDrawing = false
}

// console.log(canvas)
