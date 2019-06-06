const toggler = document.querySelector(".menu-toggler");
const bars = [...document.querySelectorAll(".bar")];
const overlayNav = document.querySelector(".overlay-nav");
const overlayNavLinks = [...document.querySelectorAll(".nav-link")];

function openNav() {
  console.log("click");
  toggler.classList.toggle("open");
  bars.forEach(bar => bar.classList.toggle("open"));
  overlayNav.classList.toggle("open");
}
toggler.addEventListener("click", openNav);

overlayNavLinks.forEach(navlink => {
  console.log(navlink);
  navlink.addEventListener("click", openNav);
});

window.onscroll = function() {
  let nav = document.querySelector("nav");

  if (window.pageYOffset >= 100) {
    nav.classList.add("navbar-float");
  } else {
    nav.classList.remove("navbar-float");
  }
};
