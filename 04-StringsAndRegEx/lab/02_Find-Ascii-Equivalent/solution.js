function solve() {
  let input = document.getElementById('text').value;
  let tokens = input.split(' ').filter(t => t !== '');

  let strings = [];
  let numbers = [];

  for (let token of tokens) {
    if (isNaN(Number(token))) {
      strings.push(token);
    } else {
      numbers.push(Number(token));
    }
  }

  let paragraph;
  let result = '';
  for (let str of strings) {
    paragraph = document.createElement('p');

    for (let ch of str) {
      let charCode = ch.charCodeAt(0);
      result += charCode + ' ';
    }
    paragraph.textContent = result.trim();
    document.getElementById('result').appendChild(paragraph);
    result = '';
  }

  paragraph = document.createElement('p');
  for (let num of numbers) {
    let char = String.fromCharCode(num);
    result += char;
  }

  paragraph.textContent = result;
  document.getElementById('result').appendChild(paragraph);
}
