// Adding "header" element
fetch("./src/components/header.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector("main").insertAdjacentHTML("beforebegin", data);
	});

// Adding "footer" element
fetch("./src/components/footer.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector("main").insertAdjacentHTML("afterend", data);
	});


	