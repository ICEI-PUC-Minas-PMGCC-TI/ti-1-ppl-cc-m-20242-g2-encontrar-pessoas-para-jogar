const apiKey = ''; 

async function getPopularGames() {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&page_size=5&ordering=-added`);
    const data = await response.json();
    
   
    const gameNames = data.results.map(game => game.name);
    const gamePopularity = data.results.map(game => game.added); 
    
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


getPopularGames();
