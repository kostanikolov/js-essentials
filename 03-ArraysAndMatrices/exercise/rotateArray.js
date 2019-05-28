function solve(params) {

    let rotatesCount = Number(params.pop());
    let rotations = rotatesCount % params.length;

    for (let index = 0; index < rotations; index++) {
        let lastElement = params.pop();
        params.unshift(lastElement);
    }

    console.log(params.join(' '));
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
