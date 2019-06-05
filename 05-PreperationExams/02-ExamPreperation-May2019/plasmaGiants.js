function solve(inputArray, cutSize) {

    let firstPiece = inputArray.slice(0, inputArray.length / 2);
    let secondPiece = inputArray.slice(inputArray.length / 2);

    let firstGiantLife = 0;
    let secondGiantLife = 0;

    while (firstPiece.length > 0 && secondPiece.length > 0) {
        firstGiantLife += firstPiece.splice(0, cutSize)
            .reduce((a, b) => a * b);

        secondGiantLife += secondPiece.splice(0, cutSize)
            .reduce((a, b) => a * b);
    }

    let hitDamage = Math.min(...inputArray);
    let minLifeToDeath = Math.max(...inputArray);

    let rounds = 1;
    while ((firstGiantLife > minLifeToDeath) && (secondGiantLife > minLifeToDeath)) {
        firstGiantLife -= hitDamage;
        secondGiantLife -= hitDamage;
        rounds++;
    }

    if (firstGiantLife === secondGiantLife) {
        console.log(`Its a draw ${firstGiantLife} - ${secondGiantLife}`);
    } else if (firstGiantLife <= minLifeToDeath) {
        console.log(`Second Giant defeated First Giant with result ${secondGiantLife} - ${firstGiantLife} in ${rounds} rounds`);
    } else if (secondGiantLife <= minLifeToDeath) {
        console.log(`First Giant defeated Second Giant with result ${firstGiantLife} - ${secondGiantLife} in ${rounds} rounds`);
    }
}

solve([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);
solve([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);
