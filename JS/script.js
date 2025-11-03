let main_menu = document.querySelector(".main-menu");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY >= 900) {
    // main_menu.style = "background: #0c0c0c;";
    main_menu.classList.add("s-bg");
  } else {
    main_menu.classList.remove("s-bg");
  }
});

$(".counter").counterUp({
  delay: 10,
  time: 1000,
});
