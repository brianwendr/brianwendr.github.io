(() => {
  const sources = document.currentScript.dataset;
  const widgets = [
    ["#busuanzi_container_page_pv", sources.counterSrc],
    [".altmetric-embed", sources.altmetricSrc],
    [".__dimensions_badge_embed__", sources.dimensionsSrc],
  ];

  function loadWidgets() {
    widgets.forEach(([selector, src]) => {
      if (!src || !document.querySelector(selector)) return;
      const script = document.createElement("script");
      script.async = true;
      script.src = src;
      document.body.appendChild(script);
    });
  }

  // An async script in the initial HTML still delays window.load.
  // Start optional services afterwards so a slow counter cannot hold it open.
  if (document.readyState === "complete") {
    loadWidgets();
  } else {
    window.addEventListener("load", loadWidgets, { once: true });
  }
})();
