function gcd(n1, n2) {
    x = Math.abs(n1);
    y = Math.abs(n2);

    while(y) {
        let t = y;
        y = x % y;
        x = t;
    }

    console.log(x);
}

gcd(15, 5);
gcd(2154, 458);
