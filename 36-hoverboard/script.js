const container = document.getElementById('container')
let colors = ['#3152A3', '#809ED0', '#B8CCE1', '#DBE5EA', '#F0F1F9']
const blueBtn = document.getElementById('blue')
const redBtn = document.getElementById('red')
const SQUARES = 600

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color =  getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#2b2b2b'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

blueBtn.addEventListener('click', () => colors = ['#3152A3', '#809ED0', '#B8CCE1', '#DBE5EA', '#F0F1F9'])
redBtn.addEventListener('click', () => colors = ['#ED5B46', '#FEAC97', '#F8CED2', '#F7DFE3', '#F0F2E7'])