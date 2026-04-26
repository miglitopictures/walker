const FPS = 60;

// Paleta de cores
const PERFECTGREY = "#808080"
const BLACK = "#000000"
const ORANGE = "#ff9900"

// const sketch = document.getElementById("sketch") // se o id do element html tem um nome valido em javascript, podemos acessar diretamente
const ctx = sketch.getContext("2d")

var width = 500
var height = 500

const randomWalker = new RandomWalker(width / 2, height / 2)
const vectorMover = new Mover(width / 2, height / 2)

function setup() {
    sketch.width = width
    sketch.height = height

    

    clearScreen(BLACK)
}

function update() {

    // Move randomWalker
    randomWalker.walk(7)
    randomWalker.wrapAround()

    // Move mover
    vectorMover.move()
    vectorMover.wrapAround()

    draw()
    setTimeout(update, 1000/FPS) // call next frame
}

function draw() {
    randomWalker.show('rgba(255, 145, 0, 0.6)')
    vectorMover.show(ORANGE)
}

setup()
setTimeout(update, 1000/FPS)


function clearScreen(color){
    ctx.fillStyle = color
    ctx.fillRect(0, 0, sketch.width, sketch.height)
}

function saveCanvasAsPng(canvas){
    // 1. Get the image data as a PNG URL
    const imageURL = canvas.toDataURL("image/png");

    // 2. Create a temporary link element
    const link = document.createElement('a');
    link.href = imageURL;
    
    // 3. Set the desired filename
    link.download = 'my-drawing.png';

    // 4. Trigger the download
    link.click();
}