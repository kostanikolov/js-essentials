function solve() {

    let arr = JSON.parse(document.getElementById('arr').value);
    let pattern = (/^([A-Z][a-z]* [A-Z][a-z]*) (\+359[ -]\d[ -]\d{3}[ -]\d{3}) ([a-z|\d]+@[a-z]+\.[a-z]{2,3})$/);
    
    let resultSpan = document.getElementById('result');
    let newParagraph;
    
    for (const line of arr) {        
        if (!pattern.test(line)) {
            newParagraph = document.createElement('p');
            newParagraph.textContent = 'Invalid data';
            resultSpan.appendChild(newParagraph);
        } else {
            let arr = pattern.exec(line);

            newParagraph = document.createElement('p');
            newParagraph.textContent = `Name: ${arr[1]}`;
            resultSpan.appendChild(newParagraph);

            newParagraph = document.createElement('p');
            newParagraph.textContent = `Phone Number: ${arr[2]}`;
            resultSpan.appendChild(newParagraph);

            newParagraph = document.createElement('p');
            newParagraph.textContent = `Email: ${arr[3]}`;
            resultSpan.appendChild(newParagraph);
        }

        newParagraph = document.createElement('p');
        newParagraph.textContent = "- - -";
        resultSpan.appendChild(newParagraph);
    }
}
