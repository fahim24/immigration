// Adding "footer" element
fetch("./src/components/footer.html")
	.then((response) => response.text())
	.then((data) => {
		document.querySelector("main").insertAdjacentHTML("afterend", data);
		console.log(data);
	});

const header = `<header>
  <div class="header">
    <div class="header-container">
      <address class="header-contact">
        <span class="h11"
          ><i class="fa-solid fa-mobile-screen-button" style="margin-right: 6px"></i>Phone: +47
          5941 295</span
        >
        <span class="h11"
          ><i class="fa-regular fa-envelope" style="margin-right: 6px"></i>Mail:
          swipe@mail.com</span
        >
        <span class="h11"
          ><i class="fa-regular fa-map" style="margin-right: 6px"></i>Find us: Road 20, Paris,
          France</span
        >
      </address>
      <div class="header-social">
        <a href="https://twitter.com/?lang=en"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.youtube.com/"
          ><i class="fa-brands fa-youtube" style="color: red"></i
        ></a>
        <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>
  </div>
  <nav class="nav-container">
    <a href="./index.html"><img src="./src/assets/svg/logo.svg" alt="logo" /></a>
    <div class="nav-items h9">
      <div>
        <a class="nav-link" href="./index.html">Home</a>
      </div>
      <div>
        <a class="nav-link" href="./about.html">About</a>
      </div>
      <div class="dropdown">
        <a href="./services.html"
          >Services <i class="fa-solid fa-angle-down" style="margin-left: 6px"></i
        ></a>
        <div class="dropdown-content">
          <a class="dropdown-link" href="./book-a-consulation.html">Book a Consultation</a>
          <a class="dropdown-link" href="./team-list">Team List</a>
        </div>
      </div>
      <div>
        <a href="./blogs.html" class="nav-link">Blogs</a>
      </div>
      <div><a href="./contact.html" class="nav-link">Contact</a></div>
      <div>
        <a href="./events.html" class="nav-link">Events</a>
      </div>
    </div>
    <div class="nav-search">
      <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <button class="btn">Get in Touch</button>
    </div>
  </nav>
  <!-- <div class="dividerV"></div> -->
</header>`;

console.log(header);
document.querySelector("main").insertAdjacentHTML("beforebegin", header);