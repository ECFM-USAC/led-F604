(function () {
  var btn = document.getElementById("print-pdf");
  if (!btn) return;
  btn.addEventListener("click", function () {
    window.print();
  });
})();
