function solve(params) {

    let step = Number(params.pop());
    for (let index = 0; index < params.length; index += step) {
        console.log(params[index]);
    }
}

solve(['5', '20', '31', '4', '20', '2']);
solve(['1', '2','3', '4', '5', '6']);
