function caloriesObject(args) {

    let caloriesObj = {};

    for (let i = 0; i < args.length; i += 2) {
        let key = args[i];
        let value = Number(args[i + 1]);

        caloriesObj[key] = value;
    }

    console.log(caloriesObj);
}

caloriesObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
caloriesObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
