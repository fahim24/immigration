// Adding ".service-section" section
fetch("./src/components/service-section.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector("main").insertAdjacentHTML("beforeend", data);
	});

// Adding ".testimonials" section
fetch("./src/components/testimonials.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector(".service-section").insertAdjacentHTML("afterend", data);
	});

// Adding ".blogs" section
fetch("./src/components/blogs-section.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector(".testimonials").insertAdjacentHTML("afterend", data);
	});

// Adding "footer" element
fetch("./src/components/footer.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector("main").insertAdjacentHTML("afterend", data);
	});
