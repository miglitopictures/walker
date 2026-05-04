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

const moverA = new Mover(300, 200, 1);
const moverB = new Mover(400, 60, 4);


const gravity = new Vector(0,0.4);

function setup() {
    sketch.width = width;
    sketch.height = height; 

    // clearScreen(BLACK);
}

function update() {
    
    let c = 0.2;

    let weightA = vecMultiply(gravity, moverA.mass);
    let weightB = vecMultiply(gravity, moverB.mass);
    
    moverA.applyForce(weightA);
    moverB.applyForce(weightB);

    if (moverA.contactGround(height)){
        
        let friction = moverA.vel.copy();
        friction.scale(-1);
        friction.setMagnitude(c);
        moverA.applyForce(friction);

    }

    if (moverB.contactGround(height)){
        let frictionBig = moverB.vel.copy();
        frictionBig.scale(-1);
        frictionBig.setMagnitude(c);
        moverB.applyForce(frictionBig);

    }


    moverA.edgeBounce();
    moverA.move();
    
    moverB.edgeBounce();
    moverB.move();

    draw();
    setTimeout(update, 1000/FPS); // call next frame
}

function draw() {
    clearScreen("orange");
    moverB.show("red");
    moverA.show("purple");

}

setup();
setTimeout(update, 1000/FPS);


function clearScreen(color){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, sketch.width, sketch.height);
}