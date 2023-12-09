// Function to highlight the active navigation link
function highlightNavLink(pageName) {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === pageName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Function to handle common card highlighting
function highlightCard(element) {
  element.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
}

function unhighlightCard(element) {
  element.style.boxShadow = "none";
}

// Function to populate game listings
function populateGameList() {
  const gameList = document.querySelector('.game-list');

  // Sample game data, replace with your actual data
  const games = [
    { title: 'Game 1', description: 'Description of Game 1.', image: 'img/game1.jpg' },
    { title: 'Game 2', description: 'Description of Game 2.', image: 'img/game2.jpg' },
    { title: 'Game 3', description: 'Description of Game 3.', image: 'img/game3.jpg' },
  ];

  games.forEach(game => {
    const gameElement = document.createElement('div');
    gameElement.classList.add('game');
    gameElement.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <p>${game.description}</p>
    `;
    gameList.appendChild(gameElement);
  });
}

// Function to handle page-specific tasks
function handlePageTasks() {
  const currentPath = window.location.pathname;

  // Highlight the active navigation link based on the current page
  highlightNavLink(currentPath);

  // Add more page-specific tasks as needed
}

// Call the function to handle page-specific tasks
handlePageTasks();
