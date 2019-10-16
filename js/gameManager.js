let gameManager = {
  setGameStart: function(characterType) {
    this.resetPlayer(characterType);
    this.setPreFight();
  },
  resetPlayer: function(characterType) {
    switch (characterType) {
      case "Elis James":
        player = new Player(characterType, 100, 30, 70, 10, 30);
        break;
      case "John Robins":
        player = new Player(characterType, 100, 70, 30, 80, 60);
        break;
      case "Dave Masterman":
        player = new Player(characterType, 100, 40, 20, 30, 40);
        break;
      case "Vinay Joshi":
        player = new Player(characterType, 100, 90, 70, 10, 30);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="img/characters/' + characterType.toLowerCase() + '.jpg" class="img-character"><div><h3>' + characterType + '</h3><p>Health: ' + player.health + '</p><p>Banter: ' + player.banter + '</p><p>Good Radio: ' + player.goodRadio + '</p><p>Darkness: ' + player.darkness + '</p><p>Anecdotes: ' + player.anecdotes + '</p></div>';
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Task: Find an opponent.</p>';
    getActions.innerHTML = '<a href="#" class= "btn-prefight" onclick="gameManager.setFight()" >Search for an opponent!</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    // Create enemy
    let enemy00 = new Enemy("Radio X Listener", 100, 20, 10, 4, 10);
    let enemy01 = new Enemy("Five Live Listener", 100, 30, 20, 5, 20);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
    }
    getHeader.innerHTML = '<p>Choose your move</P>';
    getActions.innerHTML = '<a href="#" class= "btn-prefight" onclick="PlayerMoves.calcAttack()">Banter</a>';
    console.log(chooseRandomEnemy);
    console.log(enemy);
    getEnemy.innerHTML = '<img src="/img/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Banter: ' + enemy.banter + '</p><p>Good Radio: ' + enemy.goodRadio + '</p><p>Darkness: ' + enemy.darkness + '</p><p>Anecdotes: ' + enemy.anecdotes + '</p></div>';
  }
}
