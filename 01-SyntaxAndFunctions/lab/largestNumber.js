function largest(n1, n2, n3) {
    
    if (n1 > n2 && n1 > n3) {
        console.log(`The largest number is ${n1}.`);
    } else if (n2 > n1 && n2 > n3) {
        console.log(`The largest number is ${n2}.`);
    } else {
        console.log(`The largest number is ${n3}.`);
    }
}

largest(5, -3, 16);
largest(-3, -5, -22.5);
largest(1, 7, 4);
