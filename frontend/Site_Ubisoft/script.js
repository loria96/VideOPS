// Liste des jeux 

const games = [
  {
    id: 1,
    name: "Two Ships Passing In The Night",
    image: "./Images/Two Ships Passing In The Night.png",
    description: "Naviguez dans l’espace et évitez l’ennemi.",
    playLink: "../Jeux/Two Ships Passing In The Night/index.html"
  },
  {
    id: 2,
    name: "Keep White Space",
    image: "./Images/Keep White Space.png",
    description: "Relevez le défi et maîtrisez l’espace !",
    playLink: "../Jeux/Keep White Space/index.html"
  },
  {
    id: 3,
    name: "Space Invaders",
    image: "./Images/Space Invaders.png",
    description: "Repoussez les envahisseurs venus du ciel.",
    playLink: "../Jeux/SpaceInvaders/src/index.html"


  }
];



if (document.getElementById("games-list")) {
  const list = document.getElementById("games-list");
  games.forEach(game => {
    list.innerHTML += `
      <div class="game-card">
        <img src="${game.image}" alt="${game.name}">
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <a href="score.html?id=${game.id}"><button>Voir le jeu</button></a>
      </div>
    `;
  });
}





// page détails + gestion scores
if (document.getElementById("game-details")) {
  const query = new URLSearchParams(window.location.search);
  const gameId = parseInt(query.get("id"));
  const game = games.find(g => g.id === gameId);

  const details = document.getElementById("game-details");
  details.innerHTML = `
    <h1>${game.name}</h1>
    <img src="${game.image}" alt="${game.name}">
    <p>${game.description}</p>
    <a href="${game.playLink}" ><button>Jouer</button></a>
  `;
}














  








