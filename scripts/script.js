const colorsArr = ["red", "beige", "burlywood", "coral", "aqua", "darkcyan", "pink", "lawngreen", "fuchsia"]

const body = document.querySelector("body")
const btn = document.getElementById('btn')
const coloredSpan = document.getElementById('color')

function changeColor() {
    const currentColor = body.style.backgroundColor

    let newIndex = getRandomArbitrary(0, colorsArr.length - 1)

    while (colorsArr[newIndex] === currentColor) {
        newIndex = getRandomArbitrary(0, colorsArr.length - 1)
    }

    body.style.backgroundColor = colorsArr[newIndex]
    
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



btn.addEventListener('click', changeColor)