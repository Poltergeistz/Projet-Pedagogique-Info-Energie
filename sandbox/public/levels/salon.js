//var des, bed;

// var player_bounce = 0.0,
//   player_gravity =  1000,
//   player_scale = 1.0;

var salon_time = 30;

var salonState = {
  preload: function() {
    game.load.image("ground", "assets/levels/ground.png");
    game.load.image("backg", "assets/levels/backg.png");
  },
  create: function() {
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

    // Salon sprites
    game.add.sprite(650, 450, "buffet");
    game.add.sprite(650, 418, "lamp");
    game.add.sprite(100, 450, "chaise");
    game.add.sprite(270, 450, "chaise").scale.x *= -1;
    game.add.sprite(200, 380, "etagere3");
    game.add.sprite(450, 330, "fenetre");
    game.add.sprite(400 - 64, 450 - 64, "porte");
    game.add.sprite(150, 450, "tv");

    // Capture input from user
    cursors = game.input.keyboard.createCursorKeys();

    // Create the player inside the lvl
    player = game.add.sprite(32, game.world.height - 250, "ecokid");
    game.physics.arcade.enable(player);

    // Add gravity
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 800;
    player.body.collideWorldBounds = true;

    // Animations
    player.animations.add("walk", [0,1,2,3,4,5,6,7,8], 15, true);

    /*
        // Ledges
        var ledge = platforms.create(100, 450, "ground");
        ledge.body.immovable = true;

        ledge = platforms.create(270, 450, "ground");
        ledge.body.immovable = true; */

    //  The score
    timer = game.time.create();
    timerEvent = timer.add(
      Phaser.Timer.SECOND * salon_time,
      this.gameOver,
      this
    );
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
  update: function() {
    game.physics.arcade.collide(player, platforms);
    // game.debug.body(player);
    
        // When player stop moving
        player.body.velocity.x = 0
  
      // Controls
      if (cursors.left.isDown) {
      player.body.velocity.x = -150;
      player.scale.setTo(-1, 1); // flip to left

      player.animations.play('walk');
          } else if (cursors.right.isDown) {
      player.body.velocity.x = 150;
      player.scale.setTo(1, 1); // flip to right
  
      player.animations.play('walk');
          } else {
      // If no movement keys are pressed, stop the player
      player.animations.stop()
      }
  
      //  This allows the player to jump!
    if (cursors.up.isDown && player.body.touching.down) {
      player.body.velocity.y = -400
  }
  },

  gameOver: function() {
    // chargement du niveau suivant.
    game.state.start("sdb_load");
  },

  disapearlamp: function(player, lamp) {
    if (spaceKey.isDown) {
      lamp.kill();
      score++;
    }
    if (score == 3) {
      this.gameOver();
    }
  }

  // var game = new Phaser.Game(800, 600, Phaser.AUTO, "", {
  //   preload: preload,
  //   create: create,
  //   update: update
  // });
};
