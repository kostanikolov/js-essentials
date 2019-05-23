function solve() {
   
   let playerOne = document.getElementById("player1Div");
   let playerTwo = document.getElementById("player2Div");
   
   let result = document.querySelector("#result");
   
   let leftSpan = result.children[0];
   let rightSpan = result.children[2];

   let leftValue = 0;
   let rightValue = 0;
   
   for (let card of playerOne.children) {
      card.addEventListener("click", () => {
         let cardValue = card.getAttribute("name");
         leftSpan.innerHTML = cardValue;
         result.children[0] = leftSpan;
         leftValue = Number(leftSpan.innerHTML);
         console.log(leftValue);
      })
   }

   for (let card of playerTwo.children) {
      card.addEventListener("click", () => {
         let cardValue = card.getAttribute("name");
         rightSpan.innerHTML = cardValue;
         result.children[2] = rightSpan;
         rightValue = Number(rightSpan.innerHTML);
         console.log(rightValue);
      })
   }
   
   console.log(leftValue + rightValue);
}
