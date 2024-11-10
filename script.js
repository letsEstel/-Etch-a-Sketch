const btn = document.querySelector("button");
btn.textContent = "click me to change scale";
btn.addEventListener("click", function () {
  let scale = prompt("Offer me a scale number from 16 to 100", 16);
  while (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }
  showBoard(scale);
});

const div = document.querySelector("div");
div.setAttribute("style", "display:flex; flex-wrap:wrap;");
let scaleOfBoard = 16;
function showBoard(scaleOfBoard) {
  for (let i = 0; i < scaleOfBoard; i++) {
    for (let j = 0; j < scaleOfBoard; j++) {
      const divs = document.createElement("div");
      divs.setAttribute(
        "style",
        "width: 20px; height: 20px; margin: 2px; background-color: white; border: 1px solid black;"
      );
      divs.addEventListener("mouseover", function () {
        divs.setAttribute(
          "style",
          "width: 20px; height: 20px; margin: 2px; background-color: black; border: 1px solid black;"
        );
      });
      div.appendChild(divs);
    }
  }
}
showBoard(scaleOfBoard);
