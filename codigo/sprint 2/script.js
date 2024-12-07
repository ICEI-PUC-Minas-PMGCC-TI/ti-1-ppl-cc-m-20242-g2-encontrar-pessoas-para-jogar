document.addEventListener('DOMContentLoaded', () => {
    const filterSelect = document.getElementById('filterSelect');
    const searchInput = document.getElementById('searchInput');
    const gameList = document.getElementById('gameList');

    
    function loadGames() {
        fetch('http://localhost:3000/games')  
            .then(response => response.json())
            .then(games => {
                displayGames(games);
            })
            .catch(error => console.error('Erro ao carregar jogos:', error));
    }

    
    function displayGames(games) {
        gameList.innerHTML = '';  

        games.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.classList.add('col-md-4', 'game-card');
            gameCard.setAttribute('data-type', game.type); 
            gameCard.innerHTML = `
                <div class="card">
                    <img src="${game.image}" class="card-img-top" alt="${game.name}">
                    <div class="card-body">
                        <h5 class="card-title">${game.name}</h5>
                        <a href="detalhes.html?id=${game.id}" class="btn btn-primary">Ver Detalhes</a>
                    </div>
                </div>
            `;
            gameList.appendChild(gameCard);
        });
    }

    
    function filterGames() {
        const filterValue = filterSelect.value.toLowerCase();
        const searchQuery = searchInput.value.toLowerCase();
        const games = gameList.getElementsByClassName('game-card');

        Array.from(games).forEach(game => {
            const gameType = game.getAttribute('data-type').toLowerCase();
            const gameTitle = game.querySelector('.card-title').textContent.toLowerCase();

            if ((filterValue === 'all' || gameType === filterValue) && gameTitle.includes(searchQuery)) {
                game.style.display = 'block';
            } else {
                game.style.display = 'none';
            }
        });
    }

 
    filterSelect.addEventListener('change', filterGames);
    searchInput.addEventListener('input', filterGames);

   
    loadGames();
});

document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id'); 

    const gameName = document.getElementById('gameName');
    const gameImage = document.getElementById('gameImage');
    const gameDescription = document.getElementById('gameDescription');


    function loadGameDetails() {
        fetch(`http://localhost:3000/games/${gameId}`) 
            .then(response => response.json())
            .then(game => {
                
                gameName.textContent = game.name; 
                gameImage.src = game.image; 
                gameDescription.textContent = game.description;
            })
            .catch(error => {
                console.error('Erro ao carregar os detalhes do jogo:', error);
                alert('Erro ao carregar os detalhes do jogo.');
            });
    }

    
    loadGameDetails();
});

function findGame() {
    alert('Função "Encontrar para jogar" ainda não implementada!');
}
