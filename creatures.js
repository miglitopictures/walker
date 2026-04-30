class Mover {

    constructor(x, y, mass){
        this.pos = new Vector(x, y);
        this.vel = new Vector(4,0);
        this.acc = new Vector(0,0);
        this.mass = mass;
        this.elasticity = 0.9


        this.radius = 20 + 10 * this.mass;
        this.topSpeed = 15;

    }

    applyForce(force){
        let f = vecDivide(force, this.mass);
        this.acc.add(f);
    }

    move(){
        this.vel.add(this.acc);
        this.vel.limit(this.topSpeed);
        this.pos.add(this.vel);
        this.acc.scale(0);
    }

    edgeBounce(){

        if (this.pos.x < this.radius){
            this.vel.x *= -this.elasticity;
            this.pos.x = this.radius;
        } else if (this.pos.x > width - this.radius){
            this.vel.x *= -this.elasticity;
            this.pos.x = width - this.radius;
        }

        if (this.pos.y > height - this.radius){
            this.vel.y *= -this.elasticity;
            this.pos.y = height - this.radius;
        }
    }

    wrapAround(){
        if (this.pos.x >= width) this.pos.x = 0;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.y >= height) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = height;
    }

    show(color){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    contactGround(groundHeight){
        return (this.pos.y + this.radius > groundHeight -1);
    }
}
