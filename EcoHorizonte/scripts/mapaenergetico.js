const regionData = {
    norte: { solar: 85, eolica: 60, hidro: 30, recomendacion: 'Ideal para energía solar por su alta radiación solar.' },
    centro: { solar: 70, eolica: 50, hidro: 60, recomendacion: 'Combinación de energía solar e hidroeléctrica recomendada.' },
    sur: { solar: 60, eolica: 80, hidro: 90, recomendacion: 'Gran potencial para hidroeléctrica y eólica.' },
    este: { solar: 75, eolica: 65, hidro: 50, recomendacion: 'La energía solar ofrece el mejor rendimiento.' },
    oeste: { solar: 80, eolica: 85, hidro: 40, recomendacion: 'Excelente potencial para energía eólica en esta región costera.' }
  };
  
  const fills = {
    solar: document.querySelector('.fill.solar'),
    eolica: document.querySelector('.fill.eolica'),
    hidro: document.querySelector('.fill.hidro')
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
  
  Object.values(fills).forEach(bar => {
    bar.style.width = '0%';
  });
  