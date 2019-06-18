function collect(input) {
    
    let resultArr = [];
    
    for (let index = 0; index < input.length; index++) {
       if (index % 2 === 0) {
            resultArr.push(input[index]);
       }
    }

    console.log(resultArr.join(' '));
}

collect(['20', '30', '40']);
collect(['5', '10']);
