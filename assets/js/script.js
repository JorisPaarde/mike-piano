// const navLinks = document.querySelectorAll(".nav-item");
// const menuToggle = document.getElementById("navbarNav");
// const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

// navLinks.forEach((l) => {
//   l.addEventListener("click", () => {
//     bsCollapse.toggle();
//   });
// });

// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: "#navbarNav",
//   offset: 200,
// });

function init() {
  var vidDefer = document.getElementsByTagName("iframe");
  for (var i = 0; i < vidDefer.length; i++) {
    if (vidDefer[i].getAttribute("data-src")) {
      vidDefer[i].setAttribute("src", vidDefer[i].getAttribute("data-src"));
    }
  }
}
window.onload = init;
