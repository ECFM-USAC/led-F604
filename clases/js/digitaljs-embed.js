// Simulaciones interactivas con DigitalJS (https://github.com/tilk/digitaljs).
// Cada <figure class="djs-embed" data-circuit="id"> toma el circuito del
// <script type="application/json" id="djs-id"> correspondiente. Los JSON se
// generan con Yosys + yosys2digitaljs a partir del Verilog que aparece en la página.
(function () {
  var figures = document.querySelectorAll(".djs-embed[data-circuit]");
  if (!figures.length) return;

  var SRC = "https://cdn.jsdelivr.net/npm/digitaljs@0.14.2/dist/main.js";

  function showError(fig, msg) {
    var paper = fig.querySelector(".djs-paper");
    paper.innerHTML = '<div class="djs-status">' + msg + "</div>";
  }

  function mount(fig) {
    var id = fig.getAttribute("data-circuit");
    var data = document.getElementById("djs-" + id);
    if (!data) return showError(fig, "No se encontró el circuito «" + id + "».");
    var paper = fig.querySelector(".djs-paper");
    // DigitalJS fija el tamaño del elemento que recibe; se usa uno interno para poder centrarlo.
    var inner = document.createElement("div");
    paper.innerHTML = "";
    paper.appendChild(inner);
    try {
      var circuit = new window.digitaljs.Circuit(JSON.parse(data.textContent));
      var view = circuit.displayOn((window.jQuery || window.$)(inner));
      circuit.start();
      // El acomodo automático termina después de dibujar; se ajusta el lienzo al diagrama final.
      // Si el diagrama es más ancho que la columna se reduce (hasta 60 %); si no cabe, queda scroll horizontal.
      var fit = function () {
        if (!view || !view.fitToContent) return;
        view.scale(1);
        view.fitToContent({ padding: 16, allowNewOrigin: "any" });
        var avail = paper.clientWidth - 24;
        var width = inner.offsetWidth;
        if (width > avail) {
          view.scale(Math.max(0.6, avail / width));
          view.fitToContent({ padding: 16, allowNewOrigin: "any" });
        }
      };
      [300, 1000, 2500].forEach(function (ms) { setTimeout(fit, ms); });
      addMonitor(fig, circuit);
    } catch (e) {
      showError(fig, "No se pudo cargar la simulación.");
      console.error("[digitaljs-embed]", id, e);
    }
  }

  // data-monitor="clk,q0,q1": muestra el diagrama de tiempos de esas señales debajo del circuito.
  function addMonitor(fig, circuit) {
    var names = (fig.getAttribute("data-monitor") || "").split(",").filter(Boolean);
    if (!names.length) return;
    var el = document.createElement("div");
    el.className = "djs-monitor";
    fig.insertBefore(el, fig.querySelector("figcaption"));
    var monitor = new window.digitaljs.Monitor(circuit);
    var view = new window.digitaljs.MonitorView({ model: monitor, el: el });
    view.pixelsPerTick = Number(fig.getAttribute("data-monitor-scale")) || 1;
    names.forEach(function (name) {
      var wire = circuit.findWireByLabel(name.trim());
      if (wire) monitor.addWire(wire);
      else console.warn("[digitaljs-embed] señal no encontrada:", name);
    });
    // Los buses se muestran en binario, como en el resto del curso.
    el.querySelectorAll('select[name="base"]').forEach(function (sel) {
      if (!sel.querySelector('option[value="bin"]')) return;
      sel.value = "bin";
      sel.dispatchEvent(new Event("input", { bubbles: true }));
    });
  }

  // Carga la librería (~2.4 MB) solo cuando la primera simulación se acerca a la pantalla.
  var loading = null;
  function loadLib() {
    if (!loading) {
      loading = new Promise(function (resolve, reject) {
        var s = document.createElement("script");
        s.src = SRC;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    return loading;
  }

  function start(fig) {
    loadLib().then(
      function () { mount(fig); },
      function () { showError(fig, "No se pudo descargar DigitalJS. Revisa tu conexión a internet."); }
    );
  }

  if (!("IntersectionObserver" in window)) {
    figures.forEach(start);
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);
      start(entry.target);
    });
  }, { rootMargin: "300px 0px" });
  figures.forEach(function (fig) { io.observe(fig); });
})();
