function solve(params) {
    let number = 0;
    let arr = [];

    for (let index = 0; index < params.length; index++) {
        let command = params[index];

        switch (command) {
            case 'add':
                number++;
                arr.push(number);
                break;
            case 'remove':
                number++;
                arr.pop();
                break;
        }
    }

    if (arr.length > 0) {
        console.log(arr.join('\n'));
    } else {
        console.log('Empty');
    }
}

solve(['add',
    'add',
    'add',
    'add']);

console.log('========');

solve(['add',
    'add',
    'remove',
    'add',
    'add']);

console.log('========');

solve(['remove',
    'remove',
    'remove']);
