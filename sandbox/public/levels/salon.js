//var des, bed;

// var player_bounce = 0.0,
//   player_gravity =  1000,
//   player_scale = 1.0;

var salon_time = 5;

var salonState = {
  preload: function () {

  game.load.image("ground", "assets/levels/ground.png");
  game.load.image("backg", "assets/levels/backg.png");

  },
  create: function () {

    // Background
    game.add.sprite(0, 0, "backg");

    // House

    // Salon sprites
    game.add.sprite(650,450,"buffet");
    game.add.sprite(650,418,"lamp");
    game.add.sprite(100,450,"chaise");
    game.add.sprite(270,450,"chaise").scale.x*=-1;
    game.add.sprite(200,380,"etagere3");
    game.add.sprite(430,320,"fenetre");
    game.add.sprite(400 - 64, 450 - 64,"porte");
    game.add.sprite(150,450,"tv");




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



    //  The score
    timer = game.time.create();
    timerEvent = timer.add(Phaser.Timer.SECOND * salon_time, this.gameOver, this);
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

  },

  gameOver: function () {
    // chargement du niveau suivant.
    game.state.start('sdb_load');

  },

 disapearlamp: function (player, lamp) {
    if (spaceKey.isDown) {
      lamp.kill();
      score++;
    }
    if (score == 3) {
      this.gameOver();
    }
  }

}

// var game = new Phaser.Game(800, 600, Phaser.AUTO, "", {
//   preload: preload,
//   create: create,
//   update: update
// });