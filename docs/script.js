document.addEventListener('DOMContentLoaded', function() {
  const checkboxesPresenca = document.querySelectorAll('.checkboxPresenca');

  checkboxesPresenca.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const presencaSpan = this.parentNode.parentNode.querySelector('.presencaStatus');
      if (this.checked) {
        presencaSpan.textContent = 'Presente';
        presencaSpan.style.color = 'green';
      } else {
        presencaSpan.textContent = 'Ausente';
        presencaSpan.style.color = 'black'; // Retorna para a cor padrão quando a checkbox é desmarcada
      }
    });
  });

  const botaoPresencaGeral = document.getElementById('botaoPresencaGeral');
  if (botaoPresencaGeral) {
    botaoPresencaGeral.addEventListener('click', function() {
      checkboxesPresenca.forEach(checkbox => {
        checkbox.checked = true;
        const presencaSpan = checkbox.parentNode.parentNode.querySelector('.presencaStatus');
        if (presencaSpan) {
          presencaSpan.textContent = 'Presente';
          presencaSpan.style.color = 'green';
        }
      });
    });
  }
});
