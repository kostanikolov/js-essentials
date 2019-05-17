function repeatIt(count, func) {
    for (let i = 1; i <= count; i++) {
        func(i);
    }
}

let startFunc = function(i) {
    console.log("**".repeat(i));
}

repeatIt(3, startFunc);
console.log('===========');
repeatIt(3, function(x) { console.log(2 * x + 3); });
