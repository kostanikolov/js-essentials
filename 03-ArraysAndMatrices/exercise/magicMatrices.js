function solve(params) {
    let rowSum = 0;
    let colSum = 0;

    for (let row = 0; row < params.length; row++) {
       for (let col = 0; col < params[row].length; col++) {
           rowSum += params[row][col];
           colSum += params[col][row];
       }
    }

    console.log(rowSum);
    console.log(colSum);
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);

solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]   
]);
