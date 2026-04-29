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

const physicsBody = new Mover(100, 60, 2);
const physicsBodyBig = new Mover(400, 60, 10);


const gravity = new Vector(0,1);

function setup() {
    sketch.width = width;
    sketch.height = height; 

    // clearScreen(BLACK);
}

function update() {

    physicsBody.applyForce(gravity);
    physicsBodyBig.applyForce(gravity);


    physicsBody.checkEdges();
    physicsBody.move();
    
    physicsBodyBig.checkEdges();
    physicsBodyBig.move();

    draw();
    setTimeout(update, 1000/FPS); // call next frame
}

function draw() {
    clearScreen("orange");
    physicsBodyBig.show("red");
    physicsBody.show("purple");

}

setup();
setTimeout(update, 1000/FPS);


function clearScreen(color){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, sketch.width, sketch.height);
}