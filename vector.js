class Vector {
    constructor(x,y){
        this.x = x
        this.y = y
    }

    add(other){
        this.x = this.x + other.x
        this.y = this.y + other.y
    }

    subtract(other){
        this.x = this.x - other.x
        this.y = this.y - other.y
    }

    scale(factor){
        this.x = this.x * factor
        this.y = this.y * factor
    }
}