// If a user clicks on the h1 tag, the background should change colour, if they move their mouse out of the space the background should return to the original colour.
const h1 = document.querySelector("h1");

h1.addEventListener("click", (e) => {
  e.target.style.cssText = "background-color: purple;";
});
h1.addEventListener("mouseleave", (e) => {
  e.target.style.removeProperty("background-color");
});
