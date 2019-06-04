function coffeeStorage() {
    
    let input = document.getElementsByTagName('textarea')[0].value;
    let arrayInput = JSON.parse(input);

    let warehouse = {};
    let obj;
    
    for (let i = 0; i < arrayInput.length; i++) {
        let tokens = arrayInput[i].split(', ');
        
        let command = tokens.shift();
        let brand = tokens[0];
        let name = tokens[1];
        let expirationDate = tokens[2];
        let quantity = Number(tokens[3]);

        if (command === "IN") {
            if (!warehouse.hasOwnProperty(brand)) {
                warehouse[brand] = {};
            }

            if (!warehouse[brand].hasOwnProperty(name)) {
                obj = warehouse[brand];
                obj[name] = { "Expiration Date": expirationDate, "Quantity": quantity };
            }

            if (warehouse.hasOwnProperty(brand) && 
                    warehouse[brand].hasOwnProperty(name)) {

                let currDate = warehouse[brand][name]["Expiration Date"];
                
                if (expirationDate > currDate) {
                    obj = warehouse[brand];
                    obj[name] = { "Expiration Date": expirationDate, "Quantity": quantity };
                } else if (expirationDate === currDate) {
                    warehouse[brand][name]["Quantity"] += quantity;
                }
            }
        }
    }

    console.log(warehouse);
}
