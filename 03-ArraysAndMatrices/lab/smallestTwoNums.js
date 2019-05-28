function solve(params) {
  
    let sortedParams = params.sort((a, b) => {
        return a - b;
    }).slice(0, 2);

    console.log(sortedParams.join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);
