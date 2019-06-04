function coffeeStorage() {
    const textarea = [
        "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
        "IN, Folgers, Black Silk, 2023-03-01, 14",
        "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
        "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
        "IN, Folgers, Black Silk, 2022-01-01, 10",
        "IN, Lavazza, Intenso, 2022-07-19, 20",
        "OUT, Dallmayr, Espresso, 2022-07-19, 5",
        "OUT, Dallmayr, Crema, 2022-07-19, 5",
        "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
        "REPORT",
        "INSPECTION"
    ]

    //const [report, inspection] = document.getElementsByTagName('p');
    const brands = {};

    for (const tokens of textarea) {
        const [command, brand, subBrand, date, quantity] = tokens.split(', ');

        if (command === 'IN') {
            if (!brands[brand]) {
                brands[brand] = {};
            }

            if (!brands[brand][subBrand]) {
                brands[brand][subBrand] = { date, quantity: Number(quantity) };
            }

            if (brands[brand][subBrand].date === date) {
                brands[brand][subBrand] = { date, quantity: Number(quantity) };
            }

            if (brands[brand][subBrand].date < date) {
                brands[brand][subBrand] = { date, quantity: Number(quantity) };
            }
        } else if (command === 'OUT') {
            if (brands[brand] &&
                brands[brand][subBrand] &&
                brands[brand][subBrand].date > date &&
                brands[brand][subBrand].quantity >= Number(quantity)) {
                brands[brand][subBrand].quantity -= Number(quantity);
            }
        } else if (command === 'REPORT') {
            Object.entries(brands).forEach(([brand, subBrand]) => {

                const res = [];
                Object.entries(subBrand).map(([name, info]) => {
                    res.push(`${name} - ${info.date} - ${info.quantity}.`);
                });

                //report.innerHTML += `${brand}: ${res.join(' ')}` + '<br />';
            });
        } else if (command === 'INSPECTION') {
            Object.entries(brands)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .forEach(([brand, subBrand]) => {

                    const res = [];
                    Object.entries(subBrand)
                        .sort((a, b) => b[1].quantity - a[1].quantity)
                        .forEach(([name, info]) => {
                            res.push(`${name} - ${info.date} - ${info.quantity}.`);
                        });

                    // inspection.innerHTML += `${brand}: ${res.join(' ')}` + '<br />';
                });
        }
    }
}

coffeeStorage();