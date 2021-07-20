// start header
let menu = document.getElementById("menu");
let nav = document.querySelector("nav");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  nav.classList.remove("active");
};

// start nav item
// let list = document.querySelectorAll(".list");
// list.forEach((e) => {
//   e.addEventListener("click", () => {
//     document.querySelector(".list.active").classList.remove("active");
//     e.classList.add("active");
//   });
// });
// end header
