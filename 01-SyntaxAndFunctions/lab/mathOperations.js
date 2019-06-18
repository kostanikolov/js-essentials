function operations(n1, n2, op) {
    switch (op) {
        case '+':
            console.log(n1 + n2);
            break;
        case '-':
            console.log(n1 - n2);
            break;
        case '*':
            console.log(n1 * n2);
            break;
        case '/':
            console.log(n1 / n2);
            break;
        case '%':
            console.log(n1 % n2);
            break;
        case '**':
            console.log(n1 ** n2);
            break;
    }
}

operations(2, 3, '+');
operations(2, 3, '-');
operations(2, 3, '*');
operations(2, 3, '/');
operations(2, 3, '%');
operations(2, 3, '**');
