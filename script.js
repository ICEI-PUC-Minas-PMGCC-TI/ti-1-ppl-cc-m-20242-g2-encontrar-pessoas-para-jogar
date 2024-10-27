document.addEventListener('DOMContentLoaded', () => {
    const filterSelect = document.getElementById('filterSelect');
    const searchInput = document.getElementById('searchInput');
    const gameList = document.getElementById('gameList');

    // Filter games based on dropdown selection and search input
    function filterGames() {
        const filterValue = filterSelect.value.toLowerCase();
        const searchQuery = searchInput.value.toLowerCase();
        const games = gameList.getElementsByClassName('game-card');

        Array.from(games).forEach(game => {
            const gameType = game.getAttribute('data-type').toLowerCase();
            const gameTitle = game.querySelector('.card-title').textContent.toLowerCase();

            // Display game if it matches both the filter and the search query
            if ((filterValue === 'all' || gameType === filterValue) && gameTitle.includes(searchQuery)) {
                game.style.display = 'block';
            } else {
                game.style.display = 'none';
            }
        });
    }

    // Event listeners for dropdown and search input
    filterSelect.addEventListener('change', filterGames);
    searchInput.addEventListener('input', filterGames);
});