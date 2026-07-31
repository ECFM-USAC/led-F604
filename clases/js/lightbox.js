(function () {
  var images = document.querySelectorAll(".slide-images img, .compare-item img");
  var tables = document.querySelectorAll(".table-wrap");
  if (!images.length && !tables.length) return;

  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Cerrar">✕</button><img alt="">' +
    '<div class="lightbox-table"></div>';
  document.body.appendChild(overlay);

  var overlayImg = overlay.querySelector("img");
  var overlayTable = overlay.querySelector(".lightbox-table");
  var closeBtn = overlay.querySelector(".lightbox-close");

  function openImage(img) {
    overlayTable.style.display = "none";
    overlayImg.style.display = "";
    overlayImg.src = img.src;
    overlayImg.alt = img.alt || "";
    overlay.classList.add("is-open");
  }

  function openTable(wrap) {
    overlayImg.style.display = "none";
    overlayTable.style.display = "block";
    overlayTable.innerHTML = "";
    var table = wrap.querySelector("table");
    if (table) overlayTable.appendChild(table.cloneNode(true));
    overlay.classList.add("is-open");
  }

  function close() {
    overlay.classList.remove("is-open");
  }

  images.forEach(function (img) {
    img.addEventListener("click", function () { openImage(img); });
  });

  tables.forEach(function (wrap) {
    wrap.addEventListener("click", function () { openTable(wrap); });
  });

  overlay.addEventListener("click", close);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
})();
