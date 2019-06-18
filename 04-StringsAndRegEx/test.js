function main(params) {

    let obj = {
        name: "Kosta",
        age: 24,
        demo: function () {
            return 'Hello';
        }
    }

    let arr = [10,20,30];

    let { demo } = obj;
    let [ n1, n2, n3 ] = arr;

    console.log(demo());
}

main();
