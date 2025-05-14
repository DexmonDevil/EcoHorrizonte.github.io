const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

const updateCarousel = () => {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
};

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  updateCarousel();
});

// Auto-slide cada 8 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  updateCarousel();
}, 2000);

//NAV BAR//

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
    // Botón de sugerencias
    const suggestionBtn = document.getElementById('suggestion-btn');
    const suggestionForm = document.getElementById('suggestion-form');
    const closeBtn = document.getElementById('close-suggestion-form');
    const submitBtn = document.getElementById('submit-suggestion');
    const suggestionText = document.getElementById('suggestion-text');
  
    suggestionBtn?.addEventListener('click', () => {
      suggestionForm.style.display = 'block';
    });
  
    closeBtn?.addEventListener('click', () => {
      suggestionForm.style.display = 'none';
    });
  
    submitBtn?.addEventListener('click', () => {
      const text = suggestionText.value.trim();
      if (text) {
        alert('¡Gracias por tu sugerencia!');
        suggestionText.value = '';
        suggestionForm.style.display = 'none';
      } else {
        alert('Por favor, escribe algo antes de enviar.');
      }
    });

 //contador de energia generada //

 // Datos simulados de distintas regiones con coordenadas
const regiones = [
  {
    nombre: "Colombia",
    consumo: "82.085 GWh",
    renovable: "65%",
    coords: [4.5709, -74.2973]
  },
  {
    nombre: "España",
    consumo: "248.811 GWh",
    renovable: "13,3%",
    coords: [40.4637, -3.7492]
  },
  {
    nombre: "Alemania",
    consumo: "Datos no disponibles",
    renovable: "Datos no disponibles",
    coords: [51.1657, 10.4515]
  },
  {
    nombre: "Canadá",
    consumo: "Datos no disponibles",
    renovable: "50%%",
    coords: [56.1304, -106.3468]
  },
  {
    nombre: "Brasil",
    consumo: "77.000 MW",
    renovable: "50%%",
    coords: [-14.2350, -51.9253]
  }
];

let indiceActual = 0;

// Función para elegir color según % renovable
function obtenerColorPorRenovable(porcentaje) {
  const valor = parseInt(porcentaje.replace('%', ''));
  if (valor >= 80) return 'green';
  if (valor >= 60) return 'orange';
  return 'red';
}

// Crear ícono personalizado
function crearIcono(color) {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Crear mapa centrado en la primera región
  const mapa = L.map('mapa-electricidad').setView(regiones[0].coords, 5);

  // Cargar tiles de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapa);

  // Crear marcador inicial
  const colorInicial = obtenerColorPorRenovable(regiones[0].renovable);
  let marcador = L.marker(regiones[0].coords, {
    icon: crearIcono(colorInicial)
  }).addTo(mapa)
    .bindPopup(`${regiones[0].nombre} - Consumo: ${regiones[0].consumo}`)
    .openPopup();

  // Función para cambiar región
  window.cambiarRegion = function () {
    indiceActual = (indiceActual + 1) % regiones.length;
    const region = regiones[indiceActual];

    // Actualizar texto en la interfaz
    document.getElementById("region").textContent = region.nombre;
    document.getElementById("consumo").textContent = region.consumo;
    document.getElementById("renovable").textContent = region.renovable;

    // Actualizar ícono y marcador
    const nuevoColor = obtenerColorPorRenovable(region.renovable);
    marcador.setLatLng(region.coords);
    marcador.setIcon(crearIcono(nuevoColor));
    marcador.setPopupContent(`${region.nombre} - Consumo: ${region.consumo}`).openPopup();

    // Centrar el mapa en la nueva región
    mapa.setView(region.coords, 5);
  };
 });

 const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


 // FIN //
