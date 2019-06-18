function solve() {

    let word = document.getElementById('word').value;
    let arr = JSON.parse(document.getElementById('text').value);
    
    let wordToBeReplaced = arr[0].split(' ')[2];
    let pattern = new RegExp(wordToBeReplaced, 'gi');

    let resultSpan = document.getElementById('result');
    
    for (let i = 0; i < arr.length; i++) {
        let currStr = arr[i];
        currStr = currStr.replace(pattern, word);
        
        let newParagraph = document.createElement('p');
        newParagraph.textContent = currStr;
        resultSpan.appendChild(newParagraph);
    }
}
