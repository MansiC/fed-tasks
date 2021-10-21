let pressed = false;
let startx;
let x;

let slider = document.querySelector(".slider");
let sliderinner = document.querySelector(".slider-inner");

slider.addEventListener("mousedown", (e) => {
  pressed = true;
  startx = e.offsetX - sliderinner.offsetLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseenter", (e) => {
  // console.log(e.offsetX);
  slider.style.cursor = "grab";
});
slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  pressed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;

  sliderinner.style.left = `${x - startx}px`;
  // console.log(sliderinner.style.left);
  checkBoundary();
});

function checkBoundary() {
  let outer = slider.getBoundingClientRect();
  let inner = sliderinner.getBoundingClientRect();

  console.log(inner, outer);
  if (parseInt(sliderinner.style.left) > 0) {
    sliderinner.style.left = "0px";
  } else if (inner.right < outer.right) {
    sliderinner.style.left = `-${inner.width - outer.width}px`;
  }
}
checkBoundary();
