function test(args) {
    let car = { type: "Infinity", model: "QX80", color: "blue" };

    car.year = 2018;
    car.tires = 4;

    let nums = [12, 13, 15, 21];

    for (let val in nums) {
        console.log(`${val}: ${nums[val]}`);
    }
}

test();
