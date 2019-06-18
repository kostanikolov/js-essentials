function solve(capacity, passengers) {

    let train = [];
    let initPassLength = passengers.length;
    let passengersLeft = 0;

    for (let wagon = 0; wagon < initPassLength; wagon++) {
        
        if (passengers[wagon] <= capacity) {
            train[wagon] = passengers[wagon];
        } else {
            train[wagon] = capacity;
            passengers[wagon + 1] += passengers[wagon] - capacity;
        }

        if (wagon === initPassLength - 1 && 
            passengers[initPassLength - 1] > capacity) {
            
            passengersLeft = passengers[wagon] - capacity;
        }
    }

    if (passengersLeft === 0) {
        console.log(train);
        console.log('All passengers aboard');
    } else {
        console.log(train);
        console.log(`Could not fit ${passengersLeft} passengers`);
    }
}

solve(10, [9, 39, 1, 0, 0]);
console.log('==========');
solve(6, [5, 15, 2]);
