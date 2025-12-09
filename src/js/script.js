var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});


/* FORMULÁRIO ABAIXO */

const form = document.getElementById('container-form');
const botao = document.getElementById('form-enviar')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const textoOriginal = botao.textContent;

    botao.textContent = '✔ Enviado!';
    botao.disabled = true;

    botao.classList.remove('bg-violet-600');
    botao.classList.add('bg-green-600');

    form.reset()

    setTimeout(() => {
        botao.textContent = textoOriginal;
        botao.disabled = false;

        botao.classList.remove('bg-green-600');
        botao.classList.add('bg-violet-600');
    }, 2000);
});