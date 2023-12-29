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

const interval = setInterval(() => {
  if (!document.getElementById("reels-script")) {
    loadScripts();
  } else {
    clearInterval(interval);

    const circle = new window.ReelsInitializer({
      style: 1,
      isPreviewMode: false,
      elementId: "paxify-app",
      uid: "khUPDz1BMpgDLclzPc8pJIG8lfg1",
      storeId: "076262c3-8552-4613-a39c-cf330738a2ac",
    });
    circle.render();
  }
}, 500);
