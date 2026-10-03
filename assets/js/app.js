(function () {
  var KEY = "pbb-theme";
  var root = document.documentElement;

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function iconSrc(name, theme) {
    return "/assets/icons/" + name + (theme === "dark" ? "w.png" : ".png");
  }

  function paintIcons(theme) {
    document.querySelectorAll("[data-icon]").forEach(function (img) {
      img.src = iconSrc(img.getAttribute("data-icon"), theme);
    });
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    paintIcons(theme);
  }

  apply(current());

  document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(current() === "light" ? "dark" : "light");
    });
  });

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
})();