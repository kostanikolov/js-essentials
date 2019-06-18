function solve() {
    
    let text = document.getElementById('text').value;
    let n = Number(document.getElementById('number').value);

    let arr = [];
    let indexCounter = 0;

    if (text.length % n !== 0) {
        let len = text.length;
        let symbolsCount = 0;

        while (len % n !== 0) {
            len %= n;
            len++;
            symbolsCount++;
        }

        for (let i = 0; i < symbolsCount; i++) {
            text += text[indexCounter++];
        }
    }

    for (let i = 0; i < text.length; i += n) {
        arr.push(text.substr(i, n));
    }

    document.getElementById('result').innerHTML = arr.join(' ');
}
