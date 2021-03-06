var sdb_time = 30;
var timer, energyBar;

var sdbState = {
  create: function () {
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
    game.add.sprite(50, 335, "etagere1");
    game.add.sprite(650, 335, "etagere2");
    game.add.sprite(100, 385, "meuble");
    game.add.sprite(200, 385, "douche");
    game.add.sprite(300, 385, "serviette");
    game.add.sprite(400 - 64, 385, "double_lavabo");
    game.add.sprite(500, 380, "peignoire");
    game.add.sprite(600, 450, "toilettes");
    game.add.sprite(700, 450, "pq");

    //porte
    porte = game.add.sprite(10, 450 - 64, "porte");
    game.physics.arcade.enable(porte);
    porte.body.immovable = true;

    // Capture input from user
    cursors = game.input.keyboard.createCursorKeys();

    // Create the player inside the lvl
    player = game.add.sprite(32, game.world.height - 250, "ecokid");
    game.physics.arcade.enable(player);

    // Add gravity
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 800;
    player.body.collideWorldBounds = true;

    // Player animations
    player.animations.add("walk_r", [0, 1, 2, 3, 4, 5, 6, 7, 8], 15, true);
    player.animations.add(
      "walk_l",
      [9, 10, 11, 12, 13, 14, 15, 16, 17],
      15,
      true
    );

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
  update: function () {
    energyBar.setPercent((timer.duration * 100) / (sdb_time * 1000));

    game.physics.arcade.collide(player, platforms);

    // When player stop moving
    player.body.velocity.x = 0;

    // Controls
    if (cursors.left.isDown) {
      player.body.velocity.x = -150;
      player.animations.play("walk_l");
    } else if (cursors.right.isDown) {
      player.body.velocity.x = 150;
      player.animations.play("walk_r");
    } else {
      // If no movement keys are pressed, stop the player
      player.animations.stop();
    }

    //  This allows the player to jump!
    if (cursors.up.isDown && player.body.touching.down) {
      player.body.velocity.y = -400;
    }

  },

  gameOver: function () {
    // chargement du niveau suivant.
    game.state.start("win");
  }
};
