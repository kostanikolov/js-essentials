function solve(orders) {

    let drinks = {
        'CoffeeCaffeine': 0.8,
        'CoffeeDecaf': 0.9,
        'Tea': 0.8,
    };

    let totalIncome = 0;

    for (const order of orders) {
        let bill = 0;
        let tokens = order.split(', ');
        
        let insertedCoins = Number(tokens[0]);
        let drink = tokens[1];

        if (drink === 'coffee') {
            let coffeeType = tokens[2];
            
            if (coffeeType === 'caffeine') {
                bill += drinks.CoffeeCaffeine;
            } else if (coffeeType === 'decaf') {
                bill += drinks.CoffeeDecaf;
            }

            if (tokens.length === 4) {
                // without milk
                let sugar = Number(tokens[3]);

                if (sugar > 0) {
                    bill += 0.1;
                }
            } else if (tokens.length === 5) {
                // with milk
                let sugar = Number(tokens[4]);

                bill += bill * 0.1;
                bill = +bill.toFixed(1);
                if (sugar > 0) {
                    bill += 0.1;
                }
            }
        } else if (drink === 'tea') {
            if (tokens.length === 3) {
                // wihtout milk
                let sugar = Number(tokens[2]);
                bill += drinks.Tea;

                if (sugar > 0) {
                    bill += 0.1;
                }
            } else if (tokens.length === 4) {
                // with milk
                let sugar = Number(tokens[3]);
                bill += drinks.Tea;
                bill += bill * 0.1;
                bill = +bill.toFixed(1);

                if (sugar > 0) {
                    bill += 0.1;
                }
            }
        }

        if (insertedCoins >= bill) {
            let change = insertedCoins - bill;
            console.log(`You ordered ${drink}. Price: ${bill.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            totalIncome += bill;
        } else {
            let moneyNeeded = bill - insertedCoins;
            console.log(`Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);
}

solve([
    '1.00, coffee, caffeine, milk, 4', 
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'
]);
console.log('===========');

solve([
    '8.00, coffee, decaf, 4',
    '1.00, tea, 2'
]);
