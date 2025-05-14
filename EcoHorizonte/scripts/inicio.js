document.addEventListener("DOMContentLoaded", () => {
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

  // Mapa de potencial energético
  const regionData = {
    norte: { solar: 85, eolica: 60, hidro: 30, recomendacion: 'Ideal para energía solar por su alta radiación solar.' },
    centro: { solar: 70, eolica: 50, hidro: 60, recomendacion: 'Combinación de energía solar e hidroeléctrica recomendada.' },
    sur: { solar: 60, eolica: 80, hidro: 90, recomendacion: 'Gran potencial para hidroeléctrica y eólica.' },
    este: { solar: 75, eolica: 65, hidro: 50, recomendacion: 'La energía solar ofrece el mejor rendimiento.' },
    oeste: { solar: 80, eolica: 85, hidro: 40, recomendacion: 'Excelente potencial para energía eólica en esta región costera.' },
  };

  const fills = {
    solar: document.querySelector('.fill.solar'),
    eolica: document.querySelector('.fill.eolica'),
    hidro: document.querySelector('.fill.hidro'),
  };

  const title = document.getElementById('regionTitle');
  const recomendacion = document.getElementById('recomendacion');

  document.querySelectorAll('polygon').forEach((poly) => {
    poly.addEventListener('click', () => {
      const region = poly.id;
      const data = regionData[region];

      title.textContent = `Región: ${region.charAt(0).toUpperCase() + region.slice(1)}`;
      fills.solar.style.width = data.solar + '%';
      fills.eolica.style.width = data.eolica + '%';
      fills.hidro.style.width = data.hidro + '%';
      recomendacion.textContent = data.recomendacion;

      document.querySelectorAll('polygon').forEach(p => p.style.fill = '#ccc');
      poly.style.fill = '#27ae60';
    });
  });

  // Reinicia ancho para forzar animación si se selecciona la misma región
  Object.values(fills).forEach(bar => {
    bar.style.width = '0%';
  });

  setTimeout(() => {
    fills.solar.style.width = data.solar + '%';
    fills.eolica.style.width = data.eolica + '%';
    fills.hidro.style.width = data.hidro + '%';
  }, 50);

  // Botón ir hacia arriba
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Preguntas frecuentes (FAQ)
  const faqSection = document.createElement('section');
  faqSection.className = 'section';
  faqSection.id = 'faq';
  faqSection.innerHTML = `
    <h2>Preguntas Frecuentes</h2>
    <p>Encuentra respuestas a las preguntas más comunes sobre energías renovables.</p>
    <div class="faq-container">
      <div class="faq-item">
        <div class="faq-question">¿Cuál es la diferencia entre energía renovable y energía limpia?</div>
        <div class="faq-answer">
          <p>La energía renovable proviene de fuentes que se regeneran naturalmente y son prácticamente inagotables, como el sol o el viento. La energía limpia es aquella que no produce emisiones contaminantes durante su generación, pero no necesariamente es renovable. Todas las energías renovables son limpias, pero no todas las energías limpias son renovables (como la nuclear).</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">¿Cuánto cuesta instalar paneles solares en una casa promedio?</div>
        <div class="faq-answer">
          <p>El costo de instalación de paneles solares para una casa promedio varía entre $10,000 y $25,000, dependiendo del tamaño del sistema, la ubicación geográfica y los incentivos disponibles. Sin embargo, el retorno de inversión suele ser de 5 a 10 años, y la vida útil de los paneles es de 25-30 años, lo que representa un ahorro significativo a largo plazo.</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">¿Son confiables las energías renovables para el suministro continuo?</div>
        <div class="faq-answer">
          <p>Las energías renovables como la solar y eólica son intermitentes por naturaleza, pero los avances en tecnologías de almacenamiento (baterías) y la combinación de diferentes fuentes renovables (solar + eólica + hidroeléctrica) permiten crear sistemas altamente confiables. Además, las redes inteligentes están mejorando la distribución y gestión de la energía para garantizar un suministro constante.</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">¿Cuál es el impacto ambiental real de las energías renovables?</div>
        <div class="faq-answer">
          <p>Aunque las energías renovables tienen un impacto ambiental significativamente menor que los combustibles fósiles, no están exentas de efectos. Los parques eólicos pueden afectar a aves migratorias, las grandes hidroeléctricas alteran ecosistemas fluviales, y la fabricación de paneles solares requiere materiales y energía. Sin embargo, el impacto neto es notablemente positivo al reducir emisiones de CO2, contaminación del aire y dependencia de recursos finitos.</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">¿Qué avances tecnológicos están mejorando las energías renovables?</div>
        <div class="faq-answer">
          <p>Los avances más significativos incluyen: baterías de alta capacidad y menor costo, paneles solares bifaciales que captan luz por ambas caras, turbinas eólicas más eficientes y silenciosas, algoritmos de optimización basados en IA para gestionar redes eléctricas, y nuevos materiales que mejoran la eficiencia energética. Estas innovaciones están acelerando la adopción de renovables al hacerlas más accesibles y eficientes.</p>
        </div>
      </div>
    </div>
  `;
  document.getElementById('contacto').before(faqSection);

  // Funcionalidad de acordeón para FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      faqItems.forEach(otherItem => {
        if (otherItem !== item) otherItem.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  });


});
