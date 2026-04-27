const FPS = 60;

// Paleta de cores
const PERFECTGREY = "#808080";
const BLACK = "#000000";
const ORANGE = "#ff9900";

const sketch = document.getElementById("sketch");
const ctx = sketch.getContext("2d");

let mousePos = new Vector(0,0);

sketch.addEventListener('mousemove', updateMousePosition);
sketch.addEventListener('mouseenter', updateMousePosition);
sketch.addEventListener('mouseleave', updateMousePosition);

function updateMousePosition(event){

    const rect = event.currentTarget.getBoundingClientRect();

    mousePos.x = event.pageX - rect.left;
    mousePos.y = event.pageY - rect.top;
}



let width = 500;
let height = 500;

const randomWalker = new RandomWalker(width / 2, height / 2);
const vectorMover = new Mover(width / 2, height / 2);

function setup() {
    sketch.width = width;
    sketch.height = height; 

    clearScreen(BLACK);
}

function update() {

    // Move randomWalker
    randomWalker.walk(7);
    randomWalker.wrapAround();

    // Move mover
    vectorMover.goTowards(mousePos);
    vectorMover.move();
    vectorMover.wrapAround();

    draw();
    console.log(mousePos);
    setTimeout(update, 1000/FPS); // call next frame
}

function draw() {
    randomWalker.show('rgba(255, 145, 0, 0.6)');
    vectorMover.show("purple");
}

setup();
setTimeout(update, 1000/FPS);


function clearScreen(color){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, sketch.width, sketch.height);
}