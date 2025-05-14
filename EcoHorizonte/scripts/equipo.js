ocument.addEventListener("DOMContentLoaded", () => {
  // Menú y modo oscuro
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const toggleBtn = document.getElementById("toggle-dark");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open");
  });

  // Funcionalidad del cambio de tema
 if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
 }
});