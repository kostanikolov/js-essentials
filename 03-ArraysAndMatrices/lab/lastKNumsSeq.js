function solve(n, k) {
    
    let n1 = 1;
    let arr = [ n1 ];
    let sum = 0;
    
    for (let index = 0; index < n; index++) {
        let slicedArr = arr.slice(index - k, index);
        sum = slicedArr.reduce((acc, val) => acc + val);
        arr.push(sum);
        sum = 0;
    }
    console.log(arr);

    // 1 1 2 4 7 13
    // 1 1 2 3 5 8 13 21
}

solve(6, 3);
solve(8, 2);
