const abrir = document.querySelectorAll('.abrir-modal');

abrir.forEach (button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.showModal()
    });
});

const fechar = document.querySelectorAll('.fechar-modal');

fechar.forEach (button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.close();
    });
});