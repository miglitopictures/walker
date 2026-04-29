// Funcões estáticas para manipular vetors.
// Retornam um vetor
function vecAdd(vec1,vec2){
    const x = vec1.x + vec2.x;
    const y = vec1.y + vec2.y;
    return new Vector(x,y);
}

function vecSubtract(vec1,vec2){
    const x = vec1.x - vec2.x;
    const y = vec1.y - vec2.y;
    return new Vector(x,y);
}

function vecDivide(vec1,vec2){
    const x = vec1.x / vec2.x;
    const y = vec1.y / vec2.y;
    return new Vector(x,y);
}

function vecScale(vec1,factor){
    const x = vec1.x / factor;
    const y = vec1.y / factor;
    return new Vector(x,y);
}

function vecNormalize(vec){
    const magnitude = vecGetMagnitude(vec);
    const y = vec.y / magnitude;
    return new Vector(x,y);
}

function vecGetMagnitude(vec){
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
}

// Classe Vector e métodos. //
class Vector {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    add(other){
        this.x = this.x + other.x;
        this.y = this.y + other.y;
    }

    subtract(other){
        this.x = this.x - other.x;
        this.y = this.y - other.y;
    }

    divide(factor){
        this.x = this.x / factor;
        this.y = this.y / factor;
    }

    scale(factor){
        this.x = this.x * factor;
        this.y = this.y * factor;
    }

    normalize(){
        const magnitude = vecGetMagnitude(this);
        this.x = this.x / magnitude;
        this.y = this.y / magnitude;
    }

    limit(max){
        const magnitude = vecGetMagnitude(this);
        if (magnitude > max) {
            this.normalize();
            this.scale(max);
        }
    }
}