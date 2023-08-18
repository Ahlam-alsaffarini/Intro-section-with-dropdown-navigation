setTimeout(() => {
  document.querySelector("body").style.opacity = "1";
}, 500);

let buttonList = document.querySelectorAll(
  ".header .first-content button.list"
);
let button = document.querySelectorAll(".header .first-content button");
buttonList.forEach((e) => {
  e.addEventListener("click", (ele) => {
    ele.target.classList.toggle("active");
    ele.target.parentElement.querySelector("ul").classList.toggle("active");
  });
});

let menu = document.querySelector(".toggle-menu");
let overlay = document.querySelector(".overlay");
let span = document.querySelectorAll(".header .toggle-menu span");
//nav button
menu.onclick = function (e) {
  //stop propogation
  e.stopPropagation();
  overlay.classList.toggle("active");
  for (const child of menu.children) {
    child.classList.toggle("active");
  }
  document.querySelector(".header .nav").classList.toggle("active");
};

let darkMode = document.querySelector(".dark-mode");
let lightMode = document.querySelector(".light-mode");
//dark mode and light mode
lightMode.addEventListener("click", (ele) => {
  darkMode.style.display = "inline";
  ele.target.style.display = "none";
  darkMode.style.filter = "invert(1)";
  theToggle(document.querySelector("body"));
  theToggle(document.querySelector(".header .logo img"));
  button.forEach((e) => theToggle(e));
  button.forEach((e) => e.style.setProperty("--invert", "invert(1)"));
  document.querySelectorAll(".first-content ul").forEach((e) => theToggle(e));
  document.querySelectorAll(".header li a").forEach((e) => theToggle(e));
  document.querySelector(".header .nav").classList.toggle("dark");
  span.forEach((e) => theToggle(e));
  theToggle(document.querySelector(".main .content h1"));
  theToggle(document.querySelector(".main .content p"));
  theToggle(document.querySelector("li a.Learn-more"));
  theToggle(document.querySelector(".main .img-size "));
  theToggle(document.querySelector(".main .mobile-img "));
});
darkMode.addEventListener("click", (ele) => {
  lightMode.style.display = "inline";
  ele.target.style.display = "none";
  theToggle(document.querySelector("body"));
  theToggle(document.querySelector(".header .logo img"));
  button.forEach((e) => theToggle(e));
  button.forEach((e) => e.style.setProperty("--invert", "invert(0)"));
  document.querySelectorAll(".first-content ul").forEach((e) => theToggle(e));
  document.querySelectorAll(".header li a").forEach((e) => theToggle(e));
  document.querySelector(".header .nav").classList.toggle("dark");
  span.forEach((e) => theToggle(e));
  theToggle(document.querySelector(".main .content h1"));
  theToggle(document.querySelector(".main .content p"));
  theToggle(document.querySelector("li a.Learn-more"));
  theToggle(document.querySelector(".main .img-size "));
  theToggle(document.querySelector(".main .mobile-img "));
});

function theToggle(ele) {
  return ele.classList.toggle("dark");
}
