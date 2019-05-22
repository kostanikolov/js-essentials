function population(input) {

    let towns = {};

    for (let item of input) {
        let tokens = item.split(' <-> ');
        
        let town = tokens[0];
        let population = Number(tokens[1]);

        if (!(town in towns)) {
            towns[town] = population;
        } else {
            towns[town] += population;
        }
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

population([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
