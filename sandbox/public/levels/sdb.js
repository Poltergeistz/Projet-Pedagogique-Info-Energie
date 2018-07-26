var sdb_time = 30;
var timer, energyBar;

var sdbState = {
  create: function() {
    // Background
    game.add.sprite(0, 0, "backg");

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();
    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 87, "ground");

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(1, 6);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    // Salle de Bain
    game.add.sprite(50, 285, "etagere1");
    game.add.sprite(650, 285, "etagere2");
    game.add.sprite(100, 385, "meuble");
    game.add.sprite(200, 385, "douche");
    game.add.sprite(300, 385, "serviette");
    game.add.sprite(400 - 64, 385, "double_lavabo");
    game.add.sprite(500, 335, "peignoire");
    game.add.sprite(600, 450, "toilettes");
    game.add.sprite(700, 450, "pq");

    //  The score
    timer = game.time.create();
    timerEvent = timer.add(Phaser.Timer.SECOND * sdb_time, this.gameOver, this);
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
  // update: function() {
  //   energyBar.setPercent((timer.duration * 100) / 30000);
  // }
  update: function(){
      energyBar.setPercent((timer.duration * 100) / (sdb_time * 1000));
  },

  gameOver: function() {
    // chargement du niveau suivant.
    game.state.start("win");
  }
};
