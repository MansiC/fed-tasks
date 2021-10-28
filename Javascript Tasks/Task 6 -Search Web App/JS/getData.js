import card from "./card.js";
const API_KEY = "AIzaSyAD46nHs8u3fyOrzw1hbfc2lcEiHow9Ke8";
let sliderInner;

const getData = function (i = 0, sliderinner) {
  sliderInner = sliderinner;
  const j = i + 15;
  let search = document.getElementById("search").value;
  console.log(sliderinner);
  sliderinner.innerHTML = "";

  //   ---------fetch api--------
  fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=60&q=${search}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.items.forEach((item, index) => {
        if (i < index && index < j) {
          let ele = card(item, API_KEY);
          sliderinner.appendChild(ele);
        }
      });
    });
  addPages();
};
//---------pagination-------
const addPages = () => {
  const pagebody = document.getElementById("page-body");
  pagebody.innerHTML = "";
  const pagination = document.createElement("div");
  pagination.className = "pagination";

  const pageprev = document.createElement("a");
  pageprev.innerHTML = "&laquo;";

  const page1 = document.createElement("a");
  page1.className = "page";
  page1.innerHTML = "1";
  page1.onclick = () => {
    getData(0, sliderInner);
  };

  const page2 = document.createElement("a");
  page2.className = "page";
  page2.innerHTML = "2";
  page2.onclick = () => {
    console.log("2");
    getData(15, sliderInner);
  };

  const page3 = document.createElement("a");
  page3.className = "page";
  page3.innerHTML = "3";
  page3.onclick = () => {
    console.log("3");
    getData(30, sliderInner);
  };

  const pagenext = document.createElement("a");
  pagenext.className = "page";
  pagenext.innerHTML = "&raquo;";
  pagenext.onclick = () => {
    console.log("&raquo;");
  };

  pagebody.appendChild(pagination);
  pagination.appendChild(pageprev);
  pagination.appendChild(page1);
  pagination.appendChild(page2);
  pagination.appendChild(page3);
  pagination.appendChild(pagenext);
};

export default getData;
