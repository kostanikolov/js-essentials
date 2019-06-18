function solve(params) {

    let count = params.shift();
    let firstArr = [];
    let lastArr = [];
    
    for (let index = 0; index < count; index++) {
        firstArr.push(params[index]);
    }

    for (let index = params.length - count; index <= count; index++) {
        lastArr.push(params[index]);
    }

    console.log(firstArr.join(' '));
    console.log(lastArr.join(' '));
}

solve([2, 7, 8, 9]);
// solve([3, 6, 7, 8, 9]);
