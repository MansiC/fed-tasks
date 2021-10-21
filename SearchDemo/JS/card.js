const card = function (ele, API_KEY) {
  const item = document.createElement("div");
  item.className = "item";
  const a = document.createElement("a");
  a.setAttribute("href", `https://www.youtube.com/watch?v=${ele.id.videoId}`); //"#");

  const h3 = document.createElement("p");
  h3.innerHTML = ele.snippet.title; // "title";
  a.appendChild(h3);
  const img = document.createElement("img");
  img.setAttribute("src", ele.snippet.thumbnails.high.url); // "./office.jpg");

  const cont = document.createElement("div");
  cont.className = "container";

  const h41 = document.createElement("p");
  h41.innerHTML = ele.snippet.description; //"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const h42 = document.createElement("p");
  h42.innerHTML =
    "<strong>Published Date: </strong>" +
    new Date(ele.snippet.publishedAt).toDateString();
  const h43 = document.createElement("p");
  fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${ele.id.videoId}&part=snippet,statistics
      `)
    .then((res) => res.json())
    .then((data) => {
      h43.innerHTML = data.items[0].statistics.viewCount + " views";
    });

  item.appendChild(a);
  item.appendChild(img);
  item.appendChild(cont);
  cont.appendChild(h41);
  cont.appendChild(h42);
  cont.appendChild(h43);
  return item;
};

export default card;
