function sum(n, m) {
    
    let start = +n;
    let end = +m;
    let sum = 0;
    
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    console.log(sum);
}

sum('1', '5');
sum('-8', '20');
