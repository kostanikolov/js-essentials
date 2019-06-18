function solve(params) {
    
    let res = params.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(res.join('\n'));
}

solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);
