function solve() {
   
    let playerOneDiv = document.getElementById("player1Div").children;
    let playerTwoDiv = document.getElementById("player2Div").children;
    
    let resultDiv = document.getElementById("result").children;
    let leftCardChoice = resultDiv[0];
    let rightCardChoice = resultDiv[2];

    let leftCardImg = "";
    let rightCardImg = "";

    let historyDiv = document.getElementById("history");
    
    // for (let card of playerOneDiv.children) {
    for (let card = 0; card < playerOneDiv.length; card++) {
        let cardImgElement = playerOneDiv[card];

        cardImgElement.addEventListener("click", () => {
            leftCardImg = cardImgElement;

            let cardName = cardImgElement.getAttribute("name");
            leftCardChoice.innerHTML = cardName;

            cardImgElement.setAttribute("src", "images/whiteCard.jpg");

            if (rightCardChoice.innerHTML !== "") {
                let leftCardValue = Number(leftCardChoice.innerHTML);
                let rightCardValue = Number(rightCardChoice.innerHTML);

                if (leftCardValue > rightCardValue) {
                    leftCardImg.setAttribute("style", "border: 2px solid green");
                    rightCardImg.setAttribute("style", "border: 2px solid red");

                    // let newSpanElement = document.createElement("span");
                    // newSpanElement.innerHTML = `[${leftCardValue} vs ${rightCardValue}] `;
                    historyDiv.innerHTML += `[${leftCardValue} vs ${rightCardValue}] `;

                    leftCardChoice.innerHTML = "";
                    rightCardChoice.innerHTML = "";
                } else if (rightCardValue > leftCardValue) {
                    rightCardImg.setAttribute("style", "border: 2px solid green");
                    leftCardImg.setAttribute("style", "border: 2px solid red");

                    // let newSpanElement = document.createElement("span");
                    // newSpanElement.innerHTML = `[${leftCardValue} vs ${rightCardValue}] `;
                    historyDiv.innerHTML += `[${leftCardValue} vs ${rightCardValue}] `;

                    leftCardChoice.innerHTML = "";
                    rightCardChoice.innerHTML = "";
                }
            }
        });
    }

    // for (let card of playerTwoDiv.children) {
    for (let card = 0; card < playerTwoDiv.length; card++) {
        let cardImgElement = playerTwoDiv[card];

        cardImgElement.addEventListener("click", () => {
            rightCardImg = cardImgElement;

            let cardName = cardImgElement.getAttribute("name");
            rightCardChoice.innerHTML = cardName;

            cardImgElement.setAttribute("src", "images/whiteCard.jpg");
            
            if (leftCardChoice.innerHTML !== "") {
                let leftCardValue = Number(leftCardChoice.innerHTML);
                let rightCardValue = Number(rightCardChoice.innerHTML);

                if (leftCardValue > rightCardValue) {
                    leftCardImg.setAttribute("style", "border: 2px solid green");
                    rightCardImg.setAttribute("style", "border: 2px solid red");

                    // let newSpanElement = document.createElement("span");
                    // newSpanElement.innerHTML = `[${leftCardValue} vs ${rightCardValue}] `;
                    historyDiv.innerHTML += `[${leftCardValue} vs ${rightCardValue}] `;

                    leftCardChoice.innerHTML = "";
                    rightCardChoice.innerHTML = "";
                } else if (rightCardValue > leftCardValue) {
                    rightCardImg.setAttribute("style", "border: 2px solid green");
                    leftCardImg.setAttribute("style", "border: 2px solid red");

                    // let newSpanElement = document.createElement("span");
                    // newSpanElement.innerHTML = `[${leftCardValue} vs ${rightCardValue}] `;
                    historyDiv.innerHTML += `[${leftCardValue} vs ${rightCardValue}] `;
                    leftCardChoice.innerHTML = "";
                    rightCardChoice.innerHTML = "";
                }
            }
        });
    }
}
