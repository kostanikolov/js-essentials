function solve(fundamentals, advanced, apps, form) {

    const courses = {
        "JS Fundamentals": 170,
        "JS Advanced": 180,
        "JS Apps": 190,
    };

    let totalPrice = 0;

    if (fundamentals) {
        totalPrice += courses["JS Fundamentals"];
    }

    if (advanced) {
        totalPrice += courses["JS Advanced"];
    }

    if (apps) {
        totalPrice += courses["JS Apps"];
    }

    if (fundamentals && advanced) {
        totalPrice -= courses["JS Advanced"] * 0.1;
    }

    if (fundamentals && advanced && apps) {
        totalPrice -= totalPrice * 0.06;
    }

    if (form === 'online') {
        totalPrice -= totalPrice * 0.06;
    }

    console.log(Math.round(totalPrice));
}

solve(true, false, false, "onsite");
solve(true, false, false, "online");
solve(true, true, false, "onsite");
