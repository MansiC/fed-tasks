import card from "./card.js";
import getData from "./getData.js";

const element = document.querySelector("body");
//-------- input search element---------
const inp = document.createElement("input");
inp.setAttribute("type", "text");
inp.setAttribute("id", "search");
inp.setAttribute("method", "post");
inp.setAttribute("placeholder", "search here");
inp.className = "form-control";

const button = document.createElement("button");
button.innerText = "Search";
button.className = "btn  btn-primary";
button.onclick = function () {
  getData(0, sliderinner);
};

element.appendChild(inp);
element.appendChild(button);

//--------------slider------------
const slider = document.createElement("div");
slider.className = "slider";

const sliderinner = document.createElement("div");
sliderinner.className = "slider-inner";

element.appendChild(slider);
slider.appendChild(sliderinner);

const pageBody = document.createElement("div");
pageBody.id = "page-body";
element.appendChild(pageBody);
