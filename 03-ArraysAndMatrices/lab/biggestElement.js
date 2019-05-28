function solve(params) {
    
    let newArr = [].concat(...params);
    newArr.sort((a, b) => b - a);
    let biggestElement = newArr[0];

    console.log(biggestElement);
}

solve([
    [20, 50, 10],
    [8, 33, 145]
]);

solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);
