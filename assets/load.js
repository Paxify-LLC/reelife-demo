const loadScripts = () => {
  const reelsScript = document.createElement("script");
  reelsScript.id = "reels-script";
  reelsScript.src = `https://cdn.jsdelivr.net/gh/paxify-llc/builds@latest/reelife/paxify-reelife.js`;

  const stylesheet = document.createElement("link");
  stylesheet.id = "reels-stylesheet";
  stylesheet.setAttribute("rel", "stylesheet");
  stylesheet.setAttribute(
    "href",
    `https://cdn.jsdelivr.net/gh/MRM-ORG/builds@latest/reelife/paxify-reelife.min.css`
  );

  document.body.appendChild(reelsScript);
  document.head.appendChild(stylesheet);
};

const initialiseApp = () => {
  const circle = new window.ReelsInitializer({
    style: 1,
    isPreviewMode: false,
    elementId: "reelife",
    uid: "MqCJYGz4mISSkerq6HiDuOJmdNX2",
    storeId: "000443bd-0b86-43a7-a519-66d31c9558c1",
  });
  circle.render();
};

const interval = setInterval(() => {
  if (!document.getElementById("reels-script")) {
    loadScripts();
  } else {
    initialiseApp();
  }

  if (document.getElementById("story-container")) clearInterval(interval);
}, 500);
