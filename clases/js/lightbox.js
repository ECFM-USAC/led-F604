(function () {
  var images = document.querySelectorAll(".slide-images img, .compare-item img");
  if (!images.length) return;

  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Cerrar">✕</button><img alt="">';
  document.body.appendChild(overlay);

  var overlayImg = overlay.querySelector("img");
  var closeBtn = overlay.querySelector(".lightbox-close");

  function open(img) {
    overlayImg.src = img.src;
    overlayImg.alt = img.alt || "";
    overlay.classList.add("is-open");
  }

  function close() {
    overlay.classList.remove("is-open");
  }

  images.forEach(function (img) {
    img.addEventListener("click", function () { open(img); });
  });

  overlay.addEventListener("click", close);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
})();
