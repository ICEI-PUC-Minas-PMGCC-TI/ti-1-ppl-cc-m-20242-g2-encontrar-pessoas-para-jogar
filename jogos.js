const apiKey = ''; 

async function getPopularGames() {
  try {
    // Faz uma requisição para buscar os jogos mais populares
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&page_size=5&ordering=-added`);
    const data = await response.json();
    
    // Extrai os nomes dos jogos e suas pontuações
    const gameNames = data.results.map(game => game.name);
    const gamePopularity = data.results.map(game => game.added); // Popularidade baseada em quantos usuários adicionaram o jogo
    
    updateChart(gameNames, gamePopularity);
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  }
}

function updateChart(labels, data) {
  const ctx = document.getElementById('myPieChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: 'Jogos Mais Jogados',
        data: data,
        backgroundColor: ['#FF6384', '#0066ff', '#ffa333', '#6600ff', '#33FF99'],
        hoverBackgroundColor: ['#FF6384', '#0066ff', '#ffa333', '#6600ff', '#33FF99']
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          enabled: true
        }
      }
    }
  });
}

// Chama a função para buscar os dados e atualizar o gráfico
getPopularGames();
