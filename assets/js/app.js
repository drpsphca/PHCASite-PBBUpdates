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

var menu = document.getElementById("menu-toggle");
var panel = document.getElementById("mobile-nav");
if (menu && panel) {
  menu.addEventListener("click", function () {
    var open = panel.classList.toggle("open");
    panel.hidden = !open;
    menu.setAttribute("aria-expanded", open ? "true" : "false");
  });
}
document.querySelectorAll(".season-select").forEach(function (select) {
  select.addEventListener("change", function () {
    if (select.value) window.location.href = select.value;
  });
});

var buttons = document.querySelectorAll("[data-theme-toggle]");

function current() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function paint(theme) {
  buttons.forEach(function (btn) {
    btn.textContent = theme === "light" ? "Dark" : "Light";
  });
}

paint(current());
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var next = current() === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("pbb-theme", next); } catch (e) {}
    paint(next);
  });
});