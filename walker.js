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

    walk(speed) {
        this.x += (Math.floor(Math.random() * 3) - 1) * speed
        this.y += (Math.floor(Math.random() * 3) - 1) * speed
    }

    wrapAround(){
        if (this.x >= width) this.x = 0
        if (this.x < 0) this.x = width
        if (this.y >= height) this.y = 0
        if (this.y < 0) this.y = height
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

    

    clearScreen(BLACK)
}

function update() {

    // Move walker
    walker.walk(7)
    walker.wrapAround()

    draw()
    setTimeout(update, 1000/FPS) // call next frame
}

function draw() {
    // Draw walker
    ctx.fillStyle = 'rgba(255, 145, 0, 0.6)';
    ctx.fillRect(walker.x, walker.y, 5, 5)
}

setup()
setTimeout(update, 1000/FPS)


function clearScreen(color){
    ctx.fillStyle = color
    ctx.fillRect(0, 0, world.width, world.height)
}