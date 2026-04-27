function lerp (start, end, t) {
    return start * (1 - t) + end * t;
}

function map(value, fromStart, fromEnd, toStart, toEnd){
    const t = (value - fromStart) / (fromEnd - fromStart);
    return lerp(toStart, toEnd, t);
}