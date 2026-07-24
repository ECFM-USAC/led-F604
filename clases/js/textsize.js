(function () {
  var STORAGE_KEY = "f604-text-size";
  var STEPS = ["sm", "md", "lg", "xl"];

  function currentSize() {
    return document.documentElement.getAttribute("data-text-size") || "md";
  }

  function apply(size) {
    if (size === "md") {
      document.documentElement.removeAttribute("data-text-size");
    } else {
      document.documentElement.setAttribute("data-text-size", size);
    }
    try { localStorage.setItem(STORAGE_KEY, size); } catch (e) {}
    updateButtons();
  }

  function updateButtons() {
    var i = STEPS.indexOf(currentSize());
    var dec = document.getElementById("textsize-dec");
    var inc = document.getElementById("textsize-inc");
    if (dec) dec.disabled = i <= 0;
    if (inc) inc.disabled = i >= STEPS.length - 1;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var dec = document.getElementById("textsize-dec");
    var inc = document.getElementById("textsize-inc");
    if (!dec || !inc) return;
    dec.addEventListener("click", function () {
      var i = STEPS.indexOf(currentSize());
      if (i > 0) apply(STEPS[i - 1]);
    });
    inc.addEventListener("click", function () {
      var i = STEPS.indexOf(currentSize());
      if (i < STEPS.length - 1) apply(STEPS[i + 1]);
    });
    updateButtons();
  });
})();
