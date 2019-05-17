function square(n) {
    for (let i = 1; i <= n; i++) {
        let splitted = "*".repeat(n).split('');
        let joined = splitted.join(' ');
        console.log(joined);
    }
}

square(1);
console.log("==========");
square(2);
console.log("==========");
square(5);
