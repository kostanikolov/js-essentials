function solve(days) {

    let baverages = {
        "Coffee": 40,
        "Coca-Cola": 8,
        "Tea": 20,
        "Energy Drink": 30
    }

    let coffeeDrunk = 0;
    let cocaColaDrunk = 0;
    let teaDrunk = 0;
    let energyDrunk = 0;

    for (let day = 1; day <= days; day++) {
        coffeeDrunk += (3 * 150);
        cocaColaDrunk += (2 * 250);
        teaDrunk += (3 * 350);

        if (day % 5 === 0) {
            energyDrunk += (3 * 500);
        }

        if (day % 9 === 0) {
            cocaColaDrunk += (4 * 250);
            energyDrunk += (2 * 500);
        }
    }

    let coffeeCaffeine = 0;
    let cocaColaCaffeine = 0;
    let teaCaffeine = 0;
    let energyCaffeine = 0;

    if (coffeeDrunk % 100 === 0) {
        coffeeCaffeine = (Math.floor(coffeeDrunk / 100)) * baverages.Coffee;
    } else {
        coffeeCaffeine = (Math.floor(coffeeDrunk / 100)) * baverages.Coffee;
        coffeeCaffeine += baverages.Coffee / 2;
    }

    if (cocaColaDrunk % 100 === 0) {
        cocaColaCaffeine = (Math.floor(cocaColaDrunk / 100)) * baverages["Coca-Cola"];
    } else {
        cocaColaCaffeine = (Math.floor(cocaColaDrunk / 100)) * baverages["Coca-Cola"];
        cocaColaCaffeine += baverages["Coca-Cola"] / 2;
    }

    if (teaDrunk % 100 === 0) {
        teaCaffeine = (Math.floor(teaDrunk / 100)) * baverages["Tea"];
    } else {
        teaCaffeine = (Math.floor(teaDrunk / 100)) * baverages["Tea"];
        teaCaffeine += baverages["Tea"] / 2;
    }

    if (energyDrunk % 100 === 0) {
        energyCaffeine = (Math.floor(energyDrunk / 100)) * baverages["Energy Drink"];
    } else {
        energyCaffeine = (Math.floor(energyDrunk / 100)) * baverages["Energy Drink"];
        energyCaffeine += baverages["Energy Drink"] / 2;
    }

    let totalCaffeine = coffeeCaffeine + cocaColaCaffeine + teaCaffeine + energyCaffeine;
    console.log(`${totalCaffeine} milligrams of caffeine were consumed`);
}

solve(5);
console.log('==========');
solve(8);
