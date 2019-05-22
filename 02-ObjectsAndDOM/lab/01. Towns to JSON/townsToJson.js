function towns(input) {

    let obj = [];

    for (let i = 1; i < input.length; i++) {
        let townInfo = input[i].split(/[ |][| ]/)
            .filter(ch => ch !== '');
       
        let townName = townInfo[0];
        let latitudeValue = townInfo[1];
        let longitudeValue = townInfo[2];

        obj.push({
            Town: townName,
            Latitude: Number(latitudeValue),
            Longitude: Number(longitudeValue)
        });
    }

    let stringified = JSON.stringify(obj);
    console.log(stringified);
}

towns([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |'
]);
