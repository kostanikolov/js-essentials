function solve(params) {

    let delimiter = params.pop();
    console.log(params.join(delimiter));
}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);
solve(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);
