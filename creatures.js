class Mover {

    constructor(x, y){
        this.pos = new Vector(x, y);
        this.vel = new Vector(0,0);
        this.acc = new Vector(0,0);
        
        this.mass = 1;
        this.topSpeed = 4;

    }

    goTowards(targetPosition){
        let dir = vecSubtract(targetPosition, this.pos);
        let mag = vecGetMagnitude(dir);
        mag = map(mag, 20, 50, 0 , 5);
        dir.normalize();
        dir.scale(mag);

        this.acc = dir;
    }

    applyForce(force){
        force.div(this.mass);
        this.acc.add(force);
    }

    move(){
        this.vel.add(this.acc);
        this.vel.limit(this.topSpeed);
        this.pos.add(this.vel);
        this.acc.scale(0);
    }

    wrapAround(){
        if (this.pos.x >= width) this.pos.x = 0;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.y >= height) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = height;
    }

    show(color){
        ctx.fillStyle = color;
        ctx.fillRect(this.pos.x, this.pos.y, 5, 5);
    }
}

class RandomWalker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    walk(speed) {
        this.x += (Math.floor(Math.random() * 3) - 1) * speed;
        this.y += (Math.floor(Math.random() * 3) - 1) * speed;
    }

    wrapAround(){
        if (this.x >= width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y >= height) this.y = 0;
        if (this.y < 0) this.y = height;
    }

    show(color){
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, 5, 5);
    }
}