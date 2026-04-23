const FPS = 60;

// Paleta de cores
const PERFECTGREY = "#808080"
const BLACK = "#000000"
const ORANGE = "#ff9900"


class Walker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const world = document.getElementById("world")
const ctx = world.getContext("2d")

var width = 500
var height = 500

const walker = new Walker(width / 2, height / 2)

function setup() {
    world.width = width
    world.height = height

    

    clearScreen(PERFECTGREY)
}

function update() {

    // Move walker
    walker.x += (Math.floor(Math.random() * 3) - 1) * 4
    walker.y += (Math.floor(Math.random() * 3) - 1) * 4

    if (walker.x >= width) walker.x = 0
    if (walker.x < 0) walker.x = width
    if (walker.y >= height) walker.y = 0
    if (walker.x < 0) walker.y = height

    draw()
    setTimeout(update, 1000/FPS) // call next frame
}

function draw() {
    // Draw walker
    ctx.fillStyle = ORANGE
    ctx.fillRect(walker.x, walker.y, 5, 5)
}

setup()
setTimeout(update, 1000/FPS)


function clearScreen(color){
    ctx.fillStyle = color
    ctx.fillRect(0, 0, world.width, world.height)
}