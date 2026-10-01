(function () {
  var KEY = "pbb-theme";
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  var select = document.getElementById("season-select");

  function current() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    if (btn) btn.textContent = theme === "light" ? "Dark" : "Light";
  }

  apply(current());

  if (btn) {
    btn.addEventListener("click", function () {
      apply(current() === "light" ? "dark" : "light");
    });
  }

  if (select) {
    select.addEventListener("change", function () {
      window.location.href = select.value;
    });
  }
})();