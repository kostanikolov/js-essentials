function solve() {
  let input = document.getElementById("text").value.toLowerCase();
  let casing = document.getElementById("naming-convention").value;
  let words = input.split(" ").filter(e => e !== " ");

  let output = '';
  if (casing === "Camel Case") {
    for (let word of words) {
      word = word.replace(word[0], word[0].toUpperCase());
      output += word;
    }

    output = output.replace(output[0], output[0].toLowerCase());
  } else if (casing === "Pascal Case") {
    for (let word of words) {
      word = word.replace(word[0], word[0].toUpperCase());
      output += word;
    }

    output = output.replace(output[0], output[0].toUpperCase());
  } else {
    output = "Error!";
  }

  document.getElementById("result").textContent = output;
}
