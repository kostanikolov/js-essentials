function test(args) {
    
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    console.log(sum);
}

test([11,12,13]);
