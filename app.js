function toggleMenu() {
  const nav = document.querySelector(".nav-pages");
  nav.classList.toggle("show");
}

const grid = document.querySelector(".project-block-reverse");
const items = Array.from(grid.children).reverse();
grid.innerHTML = "";
items.forEach((item) => grid.appendChild(item));
