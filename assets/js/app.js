(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  var select = document.getElementById("season-select");

  function theme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function paint() {
    if (!btn) return;
    btn.textContent = theme() === "light" ? "Dark" : "Light";
  }

  if (btn) {
    paint();
    btn.addEventListener("click", function () {
      var next = theme() === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("pbb-theme", next); } catch (e) {}
      paint();
    });
  }

  if (select) {
    select.addEventListener("change", function () {
      window.location.href = select.value;
    });
  }
})();