// Inicializa AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Inicializa Typed.js
var typed = new Typed('.typed-text', {
    strings: ['Grátis', 'Pagos', 'Downloads Rápidos'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Função de pesquisa
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', searchGames);
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchGames();
    }
});

function searchGames() {
    const query = searchInput.value.toLowerCase(); // Obtém o valor da pesquisa
    const gameCards = document.querySelectorAll('.game-card'); // Seleciona todos os cards de jogos

    gameCards.forEach(card => {
        const gameTitle = card.querySelector('h3').textContent.toLowerCase(); // Obtém o título do jogo
        if (gameTitle.includes(query)) {
            card.style.display = 'block'; // Mostra o card se o título corresponder
        } else {
            card.style.display = 'none'; // Oculta o card se não corresponder
        }
    });
}