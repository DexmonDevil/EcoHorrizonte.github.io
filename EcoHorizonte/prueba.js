document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const toggleBtn = document.getElementById("toggle-dark");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open");
  });

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
