function filterGames() {
    const searchBar = document.getElementById('searchBar');
    const gamesList = document.getElementById('gamesList');
    const gameCards = gamesList.getElementsByClassName('game-card');

    const query = searchBar.value.toLowerCase();

    for (let i = 0; i < gameCards.length; i++) {
        const gameName = gameCards[i].querySelector('span').textContent.toLowerCase();
        if (gameName.includes(query)) {
            gameCards[i].style.display = 'flex';
        } else {
            gameCards[i].style.display = 'none';
        }
    }
}