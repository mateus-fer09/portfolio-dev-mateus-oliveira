/* Alterar o tema da página */

// Seleciona os botões de tema e o elemento do corpo da página.
const btnThemeWhite = document.querySelector('.fa-lightbulb')
const btnThemeBlack = document.querySelector('.fa-regular')
const body = document.body;

// Verifica se há um valor no localStorage para o tema e aplica-o se existir.
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-theme') {
    body.classList.add('dark-theme');
    btnThemeBlack.style.display = 'block';
    btnThemeWhite.style.display = 'none';
} else if (savedTheme === 'white-theme') {
    body.classList.add('white-theme');
    btnThemeWhite.style.display = 'block';
    btnThemeBlack.style.display = 'none';
}

// Adiciona os ouvintes de eventos para alternar o tema.
btnThemeWhite.addEventListener("click", () => {
    btnThemeBlack.style.display = 'block';
    btnThemeWhite.style.display = 'none';
    body.classList.remove('dark-theme');
    body.classList.add('white-theme');

    // Salva o tema escolhido no localStorage.
    localStorage.setItem('theme', 'white-theme');
});

btnThemeBlack.addEventListener("click", () => {
    btnThemeWhite.style.display = 'block';
    btnThemeBlack.style.display = 'none';
    body.classList.remove('white-theme');
    body.classList.add('dark-theme');

    // Salva o tema escolhido no localStorage.
    localStorage.setItem('theme', 'dark-theme');
});


/* Alterar o tema da página */

/* Abrir e fechar menu */

function openNav() {
    let nav = document.querySelector('.navegation')
    nav.style.width = "100%"
}

function closeNav() {
    let nav = document.querySelector('.navegation')
    nav.style.width = "0"
}

const linksNav = document.querySelectorAll('.navegation-content a');
const nav = document.querySelector('.navegation');

linksNav.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 890) {
            nav.style.width = "0%";
        }
    });
});

/* Abrir e fechar menu */

/* abrir painel do projeto do portfólio */

const btnOpen = document.getElementById('projeto-open');
const btnClose = document.getElementById('projeto-close');
const painelProjetoPortfolio = document.querySelector('.painel-projeto-portfolio');
const videoIframe = document.querySelector('.video iframe');

btnOpen.addEventListener("click", () => {
    painelProjetoPortfolio.style.width = "100%";
    videoIframe.src = "https://www.youtube.com/embed/oVyxLvlKg6Y?si=A7FBc3Sm8BAdMx_V&autoplay=1";
});

btnClose.addEventListener("click", () => {
    painelProjetoPortfolio.style.width = "0%";
    videoIframe.src = "";
});