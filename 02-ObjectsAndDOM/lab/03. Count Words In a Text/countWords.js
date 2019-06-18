function countWords(input) {

    let sentence = input[0];
    let regex = /\w+/g;

    let words = sentence.match(regex);
    let resultObj = {};

    for (let word of words) {
        if (!resultObj.hasOwnProperty(word)) {
            resultObj[word] = 1;
        } else {
            resultObj[word] += 1;
        }
    }

    let stringified = JSON.stringify(resultObj);
    console.log(stringified);
}

countWords(["Far too slow, you're far too slow."]);
countWords(["JS devs use Node.js for server-side JS.-- JS for devs"]);
