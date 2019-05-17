function sameNumbers(num) {

    let numToString = num.toString();
    let firstSymbol = numToString[0];

    let isSame = true;
    let sum = 0;

    for (let i = 1; i < numToString.length; i++) {
        if (+firstSymbol !== +numToString[i]) {
            isSame = false;
        }
        sum += +numToString[i]
    }
    sum += +firstSymbol;

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
