function solve() {

    let containerDivElement = document.getElementById("container").children
    let convertItButton = containerDivElement[containerDivElement.length - 1];

    let selectMenuToElement = document.getElementById("selectMenuTo");
    let binaryOptionElement = selectMenuToElement.children[0];
    binaryOptionElement.setAttribute("value", "binary");
    binaryOptionElement.innerHTML = "Binary";

    let newHexadecimalOptionElement = document.createElement("option");
    newHexadecimalOptionElement.setAttribute("value", "hexadecimal");
    newHexadecimalOptionElement.innerHTML = "Hexadecimal";

    selectMenuToElement.appendChild(newHexadecimalOptionElement);
    
    convertItButton.addEventListener("click", () => {
        let decimalNumber = Number(document.getElementById("input").value);
        let selectedOption = selectMenuToElement.options[selectMenuToElement.selectedIndex].text;
        let result = document.getElementById("result");

        if (selectedOption === "Binary") {
            let binaryNumber = decimalNumber.toString(2);
            result.setAttribute("value", binaryNumber);
        } else if (selectedOption === "Hexadecimal") {
            let hexNumber = decimalNumber.toString(16);
            result.setAttribute("value", hexNumber.toUpperCase());
        }
    });
}
