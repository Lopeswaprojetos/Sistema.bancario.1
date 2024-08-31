// static/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de código JavaScript para manipulação de formulários
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            // Exemplo de validação antes do envio do formulário
            const valorInput = form.querySelector('input[name="valor"]');
            if (isNaN(valorInput.value) || valorInput.value <= 0) {
                event.preventDefault();
                alert('Por favor, insira um valor válido.');
            }
        });
    });
});
