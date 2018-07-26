var chambre_time = 30;
var timer, energyBar;

var score = 0,
//   seat,
  desk,
  bed,
  ordi,
  lamp,
  curtains
//   windowdown,
//   player,
//   platforms,
//   cursors,
//   scoreText,
//   itemacct,
//   spaceKey
  ;

var chambreState = {

    create: function () {
        // Background
        game.add.sprite(0, 0, "backg");
    
        // House
        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = game.add.group();
        //  We will enable physics for any object that is created in this group
        platforms.enableBody = true;
    
        // Here we create the ground.
        var ground = platforms.create(0, game.world.height - 87, "ground");
    
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        ground.scale.setTo(1, 6);
    
        //  This stops it from falling away when you jump on it
        ground.body.immovable = true;

        // Chambre
        game.add.sprite(100, 450, "bureau");
        game.add.sprite(110, 405, "ordi");
        game.add.sprite(165, 419, "lampe");
        game.add.sprite(150, 320, "clock");
        game.add.sprite(480, 417, "lit");
        game.add.sprite(300, 300, "ch_fenetre");

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