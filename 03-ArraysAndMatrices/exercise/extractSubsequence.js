function solve(params) {

    let currMax = params[0];
    let resultArr = [currMax];

    for (let index = 1; index < params.length; index++) {
        if (params[index] >= currMax) {
            currMax = params[index];
            resultArr.push(currMax);
        }
    }

    console.log(resultArr.join('\n'));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
