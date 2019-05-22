function solve() {
  
    let output = document.getElementById("output");
    let paragraph = document.getElementById("input").innerHTML;

    let arr = paragraph.split(".").filter(x => x !== "");
    let el;
    for (let i = 0; i < arr.length; i += 3) {
       
        el = document.createElement("p");
        //console.log(el);
        el.innerHTML += arr[i];
        el.innerHTML += arr[i+1];
        el.innerHTML += arr[i+2];

        output.appendChild(el);
    }

    console.log(el);
}
