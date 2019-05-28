function solve(params) {
    
    let resultArr = [];

    for (let index = 0; index < params.length; index++) {
        
        if (index % 2 === 1) {
            resultArr.unshift(params[index] * 2);
        }
    }

    console.log(resultArr.join(' '));
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
