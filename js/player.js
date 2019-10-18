let player;

function Player(characterType, health, banter, goodRadio, darkness, anecdotes) {
  this.characterType = characterType;
  this.health = health;
  this.banter = banter;
  this.goodRadio = goodRadio;
  this.darkness = darkness;
  this.anecdotes = anecdotes;
}

let playerMoves = {
  calcAttack: function() {
    //who attacks first?
    let getPlayerGoodRadio = player.goodRadio;
    let getEnemyGoodRadio = enemy.goodRadio;
    // player attacks!
    let playerAttack = function() {
      let calcBaseDamage;
      if (player.darkness > player.anecdotes) {
        calcBaseDamage = Math.floor(player.banter * player.darkness / 30);
      } else {
        calcBaseDamage = Math.floor(player.banter * player.anecdotes / 30);
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      // Number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.anecdotes / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    // enemy attacks!
    let enemyAttack = function() {
      let calcBaseDamage;
      if (enemy.darkness > enemy.anecdotes) {
        calcBaseDamage = Math.floor(enemy.banter * enemy.darkness / 30);
      } else {
        calcBaseDamage = Math.floor(enemy.banter * enemy.anecdotes / 30);
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      // Number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.anecdotes / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    // get player and enemy health to change later
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    // initiate attacks
    if (getPlayerGoodRadio >= getEnemyGoodRadio) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert("You bantered " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
      if (enemy.health <= 0) {
        alert("You win! Well done.");
        document.location.reload(true);
        // getPlayerHealth.innerHTML = 'Health: ' + player.health;
        // getEnemyHealth.innerHTML = 'Health: 0';
      } else {
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        // enemy attacks
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert("They bantered " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
        if (player.health <= 0) {
          alert("You Loose! Better luck next time.");
          document.location.reload(true);
          // getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
          // getPlayerHealth.innerHTML = 'Health: 0';
        } else {
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
      }
    } else if (getEnemyGoodRadio >= getPlayerGoodRadio) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert("They bantered " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
      if (player.health <= 0) {
        alert("You Loose! Better luck next time.");
        document.location.reload(true);
        // getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        // getPlayerHealth.innerHTML = 'Health: 0';
      } else {
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        // player attacks
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("You bantered " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
        if (enemy.health <= 0) {
          alert("You Win! Well done.");
          document.location.reload(true);
          // getPlayerHealth.innerHTML = 'Health: ' + player.health;
          // getEnemyHealth.innerHTML = 'Health: 0';
        } else {
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        }
      }
    }
  }
}
