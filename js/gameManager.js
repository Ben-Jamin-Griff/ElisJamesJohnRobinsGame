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

  }
}
