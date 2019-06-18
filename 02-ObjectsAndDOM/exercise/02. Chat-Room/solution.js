function solve() {

   let sendBtn = document.getElementById("send");
   sendBtn.addEventListener("click", () => {
      let textArea = document.getElementById("chat_input");
      let textAreaContent = textArea.value;

      if (textAreaContent !== "") {
         let chatMessagesElement = document.getElementById("chat_messages");
      
         let newMessageElement = document.createElement("div");
         newMessageElement.setAttribute("class", "message my-message");
         newMessageElement.textContent = textAreaContent;
         
         chatMessagesElement.appendChild(newMessageElement);
         textArea.value = "";
      }
   });
}
