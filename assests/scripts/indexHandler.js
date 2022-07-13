document.addEventListener('keydown', (e) => {
    const keyName = e.key;
    appendParagraph(keyName);
});

h1.addEventListener("click", (e) => {
    e.target.style.cssText = "background-color: purple;";
  });
  h1.addEventListener("mouseleave", (e) => {
    e.target.style.removeProperty("background-color");
  });
