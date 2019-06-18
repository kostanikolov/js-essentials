function roadRadar(input) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    const speedingWarning = 20;
    const excessiveSpeedingWarning = 40;

    let speed = Number(input[0]);
    let area = input[1];

    let speedingUp = 0;

    if (area === 'motorway') {
        if (speed > motorwayLimit) {
            speedingUp = Math.abs(speed - motorwayLimit);

            if (speedingUp <= speedingWarning) {
                console.log('speeding');
            } else if (speedingUp <= excessiveSpeedingWarning) {
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
    } else if (area === 'interstate') {
        if (speed > interstateLimit) {
            speedingUp = Math.abs(speed - interstateLimit);

            if (speedingUp <= speedingWarning) {
                console.log('speeding');
            } else if (speedingUp <= excessiveSpeedingWarning) {
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
    } else if (area === 'city') {
        if (speed > cityLimit) {
            speedingUp = Math.abs(speed - cityLimit);

            if (speedingUp <= speedingWarning) {
                console.log('speeding');
            } else if (speedingUp <= excessiveSpeedingWarning) {
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
    } else if (area === 'residential') {
        if (speed > residentialLimit) {
            speedingUp = Math.abs(speed - residentialLimit);

            if (speedingUp <= speedingWarning) {
                console.log('speeding');
            } else if (speedingUp <= excessiveSpeedingWarning) {
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);
