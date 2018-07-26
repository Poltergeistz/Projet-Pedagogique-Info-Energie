var chambre_time = 30;
var timer, energyBar;
var chambreState = {

    create: function () {

        // Background
        game.add.sprite(0, 0, "sky");

        // House

        // Salle de Bain
        game.add.sprite(50, 300, "etagere1");
        game.add.sprite(650, 300, "etagere2");
        game.add.sprite(100, 400, "meuble");
        game.add.sprite(200, 400, "douche");
        game.add.sprite(300, 400, "serviette");
        game.add.sprite(400 - 64, 400, "double_lavabo");
        game.add.sprite(500, 350, "peignoire");
        game.add.sprite(600, 450, "toilettes");
        game.add.sprite(700, 450, "pq");

        // The score
        timer = game.time.create();
        timerEvent = timer.add(Phaser.Timer.SECOND * chambre_time, this.gameOver, this);
        timer.start();
        energyBar = new HealthBar(this.game, {
          width: 150,
          height: 10,
          x: 560,
          y: 15,
          bg: { color: "#651828" },
          bar: { color: "#FEFF03" },
          animationDuration: 200,
          flipped: false
        });
        energyBar.setPercent(100);

  },
  update: function(){
      energyBar.setPercent((timer.duration * 100) / (chambre_time * 1000));
  },

  gameOver: function () {
    // chargement du niveau suivant.
    game.state.start('salon_load');

  },

}