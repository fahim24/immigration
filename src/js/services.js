// Adding ".process-section" section
fetch("./src/components/process.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector("main").insertAdjacentHTML("beforeend", data);
	});

// Adding ".testimonials" section
fetch("./src/components/testimonials.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector(".process-section").insertAdjacentHTML("afterend", data);
	});

// Adding ".blogs" section
fetch("./src/components/blogs-section.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector(".testimonials").insertAdjacentHTML("afterend", data);
	});

// Adding ".contacts" section
fetch("./src/components/contacts.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector(".blogs").insertAdjacentHTML("afterend", data);
	});

// Adding "footer" element
fetch("./src/components/footer.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector("main").insertAdjacentHTML("afterend", data);
	});
