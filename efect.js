const r = document.querySelector(":root");
const bodyElement = document.body;
const randomizeElement = document.querySelector(".randomize");
const destinations = [
  {
    name: "Aиgιιε",
    location: " (379626375)",
    img:
      "https://i.imgur.com/lCjrkme.png"
  },
  {
    name: "Aиgιιε",
    location: "(379626375)",
    img:
      "https://i.imgur.com/YaCeCVc.png"
  },
  {
    name: "Aиgιιε",
    location: "(379626375)",
    img:
      "https://i.imgur.com/MnbqN2V.png"
  },
  {
    name: "Aиgιιε",
    location: "(379626375)",
    img:
      "https://i.imgur.com/7acXWKb.png"
  },
  {
    name: "Aиgιιε",
    location: "(379626375)",
    img:
      "https://i.imgur.com/LGspCFO.png"
  },
  {
    name: "Aиgιιε",
    location: "(379626375)",
    img:
      "https://i.imgur.com/mvG9bji.png"
  },
  {
    name: "Aиgιιε",
    location: "(379626375)",
    img:
      "https://i.imgur.com/FGJycav.png"
  },
  {
    name: "Aиgιιε",
    location: "(379626375)",
    img:
      "https://i.imgur.com/t68zC6n.png"
  },
  {
    name: "Aиgιιε",
    location: "(379626375)",
    img: "https://i.imgur.com/ZGOXke0.png"
  },
  {
    name: "Aиgιιε",
    location: "(379626375)",
    img: "https://i.imgur.com/jsyl8dB.png"
  },
  {
    name: "Aиgιιε",
    location: "(379626375)",
    img: "https://i.imgur.com/rvX1Osx.png"
  },
  {
    name: "Aиgιιε",
    location: "(379626375)",
    img:
      "https://i.imgur.com/lpx8wMC.png"
  }
];
let nextDestination = destinations[1];

const getRandomDestination = () => {
  const randomId = Math.floor(Math.random() * destinations.length);
  return destinations[randomId];
};

const displayNextContent = () => {
  if (bodyElement.classList.contains("body--animated")) {
    return;
  }

  bodyElement.classList.add("body--animated");

  setTimeout(() => {
    r.style.setProperty("--img-current", `url(${nextDestination.img})`);
    r.style.setProperty("--text-current-title", `"${nextDestination.name}"`);
    r.style.setProperty(
      "--text-current-subtitle",
      `"${nextDestination.location}"`
    );
    setTimeout(() => {
      bodyElement.classList.remove("body--animated");
      setTimeout(() => {
        nextDestination = getRandomDestination();
        r.style.setProperty("--img-next", `url(${nextDestination.img})`);
        r.style.setProperty("--text-next-title", `"${nextDestination.name}"`);
        r.style.setProperty(
          "--text-next-subtitle",
          `"${nextDestination.location}"`
        );
      }, 1000);
    }, 1000);
  }, 1000);
};

randomizeElement.addEventListener("click", displayNextContent);

// start on fist load only for CodePen Animation ;)
displayNextContent();
