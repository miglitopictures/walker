class RandomWalker {
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

    show(color){
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, 5, 5)
    }
}


class Mover {

    constructor(x, y){
        this.position = new Vector(x, y)
        this.velocity = new Vector(2.7,1)
    }

    move(){
        this.position.add(this.velocity)
    }

    wrapAround(){
        if (this.position.x >= width) this.position.x = 0
        if (this.position.x < 0) this.position.x = width
        if (this.position.y >= height) this.position.y = 0
        if (this.position.y < 0) this.position.y = height
    }

    show(color){
        ctx.fillStyle = color;
        ctx.fillRect(this.position.x, this.position.y, 5, 5)
    }
}
