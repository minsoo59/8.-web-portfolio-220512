import "./overlay/overDeta.js";
//detail
fetch("../../javascripts/list/videos.txt").then(function (res) {
  res.text().then(function (text) {
    let items = text.split(",");
    let tags = "";
    for (let n = 0; n < items.length; n++) {
      let item = items[n];
      item = item.trim();
      let tag = `
                  <li id="${item}" class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${item}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                  </li>
                `;
      tags = tags + tag;
    }
    document.querySelector("#videoList > ul").innerHTML = tags;
  });
  if (res.status == "404") {
    alert("Not found");
  }
});

const prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  videoList = document.getElementById("videoList"),
  ul = videoList.querySelector("ul");

function nextHandler() {
  ul.append(ul.firstElementChild);
}
function prevHandler() {
  ul.prepend(ul.lastElementChild);
}

function init() {
  // slide button
  prev.addEventListener("click", prevHandler);
  next.addEventListener("click", nextHandler);
}
init();
