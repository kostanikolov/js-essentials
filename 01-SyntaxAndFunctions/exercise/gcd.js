// function gcd(n1, n2) {
//     x = Math.abs(n1);
//     y = Math.abs(n2);

//     while(y) {
//         let t = y;
//         y = x % y;
//         x = t;
//     }

//     console.log(x);
// }

function gcd(n1, n2) {

    let greatestDivisor = 0;

    for (let i = 1; i <= Math.min(n1, n2); i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            greatestDivisor = i;
        }
    }

    console.log(greatestDivisor);
}

gcd(15, 5);
gcd(2154, 458);
