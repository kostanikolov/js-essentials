function createArticle() {
	
	let title = document.getElementById("createTitle").value;
	let content = document.getElementById("createContent").value;

	let articlesList = document.getElementById("articles");

	if (title !== "" && content !== "") {
		let articleElement = document.createElement("article");

		let h3Element = document.createElement("h3");
		h3Element.textContent = title;

		let pElement = document.createElement("p");
		pElement.textContent = content;
		
		articleElement.appendChild(h3Element);
		articleElement.appendChild(pElement);

		articlesList.appendChild(articleElement);
	}

	document.getElementById("createTitle").value = "";
	document.getElementById("createContent").value = "";
}
