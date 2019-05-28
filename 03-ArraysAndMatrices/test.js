function main(params) {

    let res = params.filter(x => x % 2 === 1);
    console.log(res);
}

main([1, 2, 3, 4, 5, 6, 7, 8, 9]);
