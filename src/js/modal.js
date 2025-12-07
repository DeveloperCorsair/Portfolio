document.querySelectorAll('.abrir-modal').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) modal.showModal();
    });
});

document.querySelectorAll('.fechar-modal').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) modal.close();
    });
});

document.querySelectorAll('[data-fora="sair-modal"]').forEach(dialog => {
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            dialog.close();
        }
    });
});