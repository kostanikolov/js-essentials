function calculate(x, y, operator) {

    let calc = function(x, y, funcOp) { return funcOp(x, y) }
    
    let add = function(x, y) { return x + y }
    let subtract = function(x, y) { return x - y }
    let multiply = function(x, y) { return x * y }
    let divide = function(x, y) { return x / y }

    switch (operator) {
        case '+': return calc(x, y, add);
        case '-': return calc(x, y, subtract);
        case '*': return calc(x, y, multiply);
        case '/': return calc(x, y, divide);
    }
}

console.log(calculate(12, 6, '+'));
console.log(calculate(12, 6, '-'));
console.log(calculate(12, 6, '*'));
console.log(calculate(12, 6, '/'));
