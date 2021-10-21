import card from "./card.js";
const API_KEY = "AIzaSyAD46nHs8u3fyOrzw1hbfc2lcEiHow9Ke8";

const getData = function (sliderinner) {
  let search = document.getElementById("search").value;
  console.log(sliderinner);
  sliderinner.innerHTML = "";

  //   for (let i = 0; i < 15; i++) {
  //     let ele = card();
  //     sliderinner.appendChild(ele);
  //   }

  //   ---------fetch api--------
  fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=${search}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.items.forEach((item) => {
        // console.log(item.id.videoId);
        let ele = card(item, API_KEY);
        sliderinner.appendChild(ele);
      });
    });
};

export default getData;
