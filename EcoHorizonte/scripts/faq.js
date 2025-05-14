// Funcionalidad de acordeón para las FAQs
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // Cierra otras
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });

      // Toggle actual
      item.classList.toggle('active');
    });
  });
});