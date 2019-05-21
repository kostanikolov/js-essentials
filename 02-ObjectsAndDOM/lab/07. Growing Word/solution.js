function growingWord() {

    let paragraphElement = document.querySelector("#exercise p");
    let currPx = paragraphElement.style.fontSize.slice(0, -2) * 2 || 2;
    
    let blueDiv = document.getElementById("blueDiv");
    let greenDiv = document.getElementById("greenDiv");
    let redDiv = document.getElementById("redDiv");

    let isBlue = blueDiv.getAttribute("active") === "true";
    let isGreen = greenDiv.getAttribute("active") === "true";
    let isRed = redDiv.getAttribute("active") === "true";
   
    if (currPx === 2 || isBlue) {
        paragraphElement.style.color = "blue";
        blueDiv.setAttribute("active", false);
        greenDiv.setAttribute("active", true);
    } else if (isGreen) {
        paragraphElement.style.color = "green";
        greenDiv.setAttribute("active", false);
        redDiv.setAttribute("active", true);
    } else if (isRed) {
        paragraphElement.style.color = "red";
        redDiv.setAttribute("active", false);
        blueDiv.setAttribute("active", true);
    }

    paragraphElement.style.fontSize = `${currPx}px`;
}
