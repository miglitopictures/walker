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
    walker.x += 1


    draw()
    setTimeout(update, 1000/FPS) // call next frame
}

function draw() {
    // Draw walker
    ctx.fillStyle = ORANGE
    ctx.fillRect(walker.x,walker.y,40,40)
}

setup()
setTimeout(update, 1000/FPS)


function clearScreen(color){
    ctx.fillStyle = color
    ctx.fillRect(0, 0, world.width, world.height)
}