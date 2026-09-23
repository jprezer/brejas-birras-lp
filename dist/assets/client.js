const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
let returnFocus = null;

function setMenu(open) {
  if (!menuButton || !mobileMenu) return;
  if (open) returnFocus = document.activeElement;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);

  if (open) {
    requestAnimationFrame(() => mobileMenu.querySelector("a")?.focus());
  } else if (returnFocus instanceof HTMLElement) {
    returnFocus.focus();
    returnFocus = null;
  }
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileMenu?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) setMenu(false);
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
