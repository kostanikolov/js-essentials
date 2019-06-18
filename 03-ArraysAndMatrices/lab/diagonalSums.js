function solve(params) {

    let leftDiagonal = 0;
    let rightDiagonal = 0;
    
    for (let i = 0; i < params.length; i++) {
        leftDiagonal += params[i][i];
        rightDiagonal += params[i][params.length - i - 1];
    }
    
    console.log([leftDiagonal, rightDiagonal].join(' '));
}

solve([
    [20, 40],
    [10, 60]
]);

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);

solve([
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]);
