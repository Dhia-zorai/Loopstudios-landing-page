const show_men = document.querySelector(".open-menu");
const close_men = document.querySelector(".close-menu");
const nav = document.querySelector(".header-nav");
const overlay = document.querySelector(".overlay");
const navLinks = nav ? nav.querySelectorAll("a") : [];

function setNavAccessibility(isOpen) {
  if (!nav || !show_men || !close_men || !overlay) return;
  nav.setAttribute("aria-hidden", !isOpen);
  nav.setAttribute("tabindex", isOpen ? "0" : "-1");
  show_men.setAttribute("aria-expanded", isOpen);
  close_men.setAttribute("tabindex", isOpen ? "0" : "-1");
  overlay.setAttribute("aria-hidden", !isOpen);
  overlay.setAttribute("aria-modal", isOpen ? "true" : "false");
  overlay.setAttribute("role", isOpen ? "dialog" : "presentation");
  navLinks.forEach((link) =>
    link.setAttribute("tabindex", isOpen ? "0" : "-1")
  );
}

if (show_men && close_men && nav && overlay) {
  show_men.addEventListener("click", () => {
    const isOpen = !nav.classList.contains("active");
    nav.classList.toggle("active");
    show_men.classList.toggle("active");
    close_men.classList.toggle("active", nav.classList.contains("active"));
    overlay.style.display = nav.classList.contains("active") ? "block" : "none";
    overlay.classList.toggle("active", nav.classList.contains("active"));
    setNavAccessibility(isOpen);
    if (isOpen) close_men.focus();
  });
  close_men.addEventListener("click", () => {
    nav.classList.remove("active");
    show_men.classList.remove("active");
    close_men.classList.remove("active");
    overlay.style.display = "none";
    overlay.classList.remove("active");
    setNavAccessibility(false);
    show_men.focus();
  });
  overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    show_men.classList.remove("active");
    close_men.classList.remove("active");
    overlay.style.display = "none";
    overlay.classList.remove("active");
    setNavAccessibility(false);
    show_men.focus();
  });
}
