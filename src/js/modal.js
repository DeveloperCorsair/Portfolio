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

const sair = document.querySelectorAll('.modais');  

sair.forEach (dialog => {
    dialog.addEventListener ('click', (i) => {

        if (i.target === dialog) {
            dialog.close();
        }
    });
});
    