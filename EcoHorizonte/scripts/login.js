 const loginsec=document.querySelector('.login-section')
 const loginlink=document.querySelector('.login-link')
 const registerlink=document.querySelector('.register-link')
 registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
 })
 loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
 })

 document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
  
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.classList.toggle('open');
  
    
    });
  
   //submenu// navbar//
   });
  
   document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".dropdown-toggle");
    const parentLi = toggle.parentElement;
  
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      parentLi.classList.toggle("show-dropdown");
    });
  
    // Ocultar si se hace clic fuera del menú
    document.addEventListener("click", function (e) {
      if (!parentLi.contains(e.target)) {
        parentLi.classList.remove("show-dropdown");
      }
    });
   });
  
   //Cambiador de color//
  
   const toggleBtn = document.getElementById("toggle-dark");
   toggleBtn.addEventListener("click", () => {
     document.body.classList.toggle("dark-mode");
   });

   //login//

   document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    const respuesta = await fetch('/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({usuario, contrasena})
    });

    const resultado = await respuesta.text();
    document.getElementById('mensaje').innerText = resultado;
});

   