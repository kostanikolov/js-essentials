function solve() {

    function clickEvent() {
      let textElement = this.parentNode.children[1];
      console.log(textElement);
      let text = textElement.innerText.toString();
      let number = text.match(/\d+/)[0];
      text = text.replace(number, (+number + 1).toString());
      textElement.innerHTML = text;
    }

    //add event to links
    let linkElements = document.getElementsByClassName('link-1');

    //console.log(linkElements);

    for (let linkElement of linkElements) {
      //console.log(linkElement);
      linkElement.addEventListener('click', clickEvent);
    }
}
