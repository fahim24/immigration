fetch("./src/components/footer.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector("body").insertAdjacentHTML("beforeend", data);
	});

fetch("./src/components/contacts.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector("main").insertAdjacentHTML("beforeend", data);
	});
