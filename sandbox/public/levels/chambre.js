var chambre_time = 30;
var timer, energyBar;

var score = 0,
  //   seat,
  bureau,
  ordi,
  lampe,
  lit,
  fenetre;
  //   windowdown,
  //   player,
  //   platforms,
  //   cursors,
  //   scoreText,
  //   itemacct,
  //   spaceKey

var ordiEteint,
  lampe2Eteinte,
  fenetreEteinte = false;

var chambreState = {
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

    // Chambre
    game.add.sprite(100, 450, "bureau");
    bureau = platforms.create(100, 450, "bureau");
    bureau.body.immovable = true;
    ordi = game.add.sprite(110, 405, "ordi");
    game.physics.arcade.enable(ordi);
    ordi.body.immovable = true;
    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    lampe = game.add.sprite(165, 419, "lampe");
    game.physics.arcade.enable(lampe);
    lampe.body.immovable = true;
    game.add.sprite(150, 320, "clock");
    lit = game.add.sprite(480, 417, "lit");
    lit.scale.setTo(0.75, 0.75);

    fenetre = game.add.sprite(300, 300, "ch_fenetre");
    game.physics.arcade.enable(fenetre);
    fenetre.body.immovable = true;



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

    //porte
    porte = game.add.sprite(60 - 64, 450 - 64, "porte");
    game.physics.arcade.enable(porte);
    porte.body.immovable = true;

    // The score
    timer = game.time.create();
    timerEvent = timer.add(
      Phaser.Timer.SECOND * chambre_time,
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
  update: function () {
    energyBar.setPercent((timer.duration * 100) / (chambre_time * 1000));
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.overlap(player, porte,this.gameOver,null, this);
    game.physics.arcade.overlap(player, ordi,this.stopOrdi,null, this);
    game.physics.arcade.overlap(player, lampe,this.stopLamp,null, this);
    game.physics.arcade.overlap(player, fenetre,this.stopWindow,null, this);

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
  
  CollidePorte: function (obj1, obj2) {
    if(ordiEteint == true && lampe2Eteinte==true && fenetreEteinte == true){
      console.log("prend la porte!!!");
      //porte.kill();
      game.state.start("salon_load");
    }
    
    //  This function can perform your own additional checks on the 2 objects that collided.
    //  For example you could test for velocity, health, etc.
    //  This function needs to return either true or false. If it returns true then collision carries on (separating the two objects).
    //  If it returns false the collision is assumed to have failed and aborts, no further checks or separation happen.
    console.log("collision!!");
  },

  gameOver: function() {
    // chargement du niveau suivant.
    game.state.start("salon_load");
  },



  stopOrdi: function () {
    if (spaceKey.isDown) {
      console.log("ETEIND UN TRUC");
      ordi.loadTexture("ordi_active");
      ordiEteint = true;
      score++;
    }
  },


  stopLamp: function () {
    if (spaceKey.isDown) {
      console.log("ETEIND UN TRUC");
      lampe.loadTexture("lampe_active");
      lampe2Eteinte = true;
      score++;
    }
  },


  stopWindow: function () {
    if (spaceKey.isDown) {
      console.log("ETEIND UN TRUC");
      fenetre.loadTexture("fenetre");
      fenetreEteinte = true;
      score++;
    }
  }
};
