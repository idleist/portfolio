//     $("nav a[href*='#']").on("click", function() {
//       $("html, body").animate(
//         {
//           scrollTop: $($(this).attr("href")).offset().top - 100
//         },
//         1500
//       );
//     });

//     $("#up").on("click", function() {
//       $("html, body").animate(
//         {
//           scrollTop: 0
//         },
//         1500
//       );
//     });

const toggler = document.querySelector(".menu-toggler");
const bars = [...document.querySelectorAll(".bar")];
const overlayNav = document.querySelector(".overlay-nav");

toggler.addEventListener("click", e => {
  toggler.classList.toggle("open");
  bars.forEach(bar => bar.classList.toggle("open"));
  overlayNav.classList.toggle("open");
});

window.onscroll = function() {
  let nav = document.querySelector("nav");

  if (window.pageYOffset >= 100) {
    nav.classList.add("navbar-float");
  } else {
    nav.classList.remove("navbar-float");
  }
};
