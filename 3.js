function sum(x) {
    return function(y) {
        return x + y;
    };
}

let a = sum(5);

console.log(sum(6)(4));