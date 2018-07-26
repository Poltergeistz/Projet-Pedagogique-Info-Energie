var timer, energyBar;


function render() {
  // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
  if (timer.running) {
    game.debug.text(
      Math.round((timerEvent.delay - timer.ms) / 1000),
      2,
      14,
      "#ff0"
    );
    } else {
    game.debug.text("Done!", 2, 14, "#0f0");
  }
}





var salon_time = 30;

var chair, chair2, tv;
var score = 0;
var lampEteinte = false;
var fenetreFermee = false;
var tvEteinte = false;

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

    //lampe
    lamp = game.add.sprite(650, 418, "lamp");
    game.physics.arcade.enable(lamp);
    lamp.body.immovable = true;
    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    // game.add.sprite(100, 450, "chaise");
    chair = platforms.create(100, 450, "chaise");
    chair.body.immovable = true;

    // game.add.sprite(270, 450, "chaise").scale.x *= -1;
    game.add.sprite(200, 380, "etagere3");
    //fenetre
    fenetre = game.add.sprite(450, 330, "fenetre_active");
    game.physics.arcade.enable(fenetre);
    fenetre.body.immovable =true;
    //porte
    porte = game.add.sprite(400 - 64, 450 - 64, "porte");
    game.physics.arcade.enable(porte);
    porte.body.immovable = true;
    //tv
    tv = game.add.sprite(150, 450, "tv");
    game.physics.arcade.enable(tv);
    tv.body.immovable =true;

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
    tv.animations.add("tv", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 15, true);
    player.animations.add("walk_r", [0, 1, 2, 3, 4, 5, 6, 7, 8], 15, true);
    player.animations.add(
      "walk_l",
      [9, 10, 11, 12, 13, 14, 15, 16, 17],
      15,
      true
    );
    tv.animations.play("tv");

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
    energyBar.setPercent(((timer.duration * 100) / salon_time) * 1000);

    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.overlap(player, lamp,this.disapearlamp,null, this);
    game.physics.arcade.overlap(player, porte,this.CollidePorte,null, this);
    game.physics.arcade.overlap(player, tv,this.stopTv,null, this);
    game.physics.arcade.overlap(player, fenetre,this.closeWindow,null, this);
    // game.physics.arcade.collide(player, salon_items);
    // game.debug.body(player);
    

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
    if(lampEteinte == true && tvEteinte==true && fenetreFermee == true){
      console.log("prend la porte!!!");
      //porte.kill();
      game.state.start("sdb_load");
    }
    
    //  This function can perform your own additional checks on the 2 objects that collided.
    //  For example you could test for velocity, health, etc.
    //  This function needs to return either true or false. If it returns true then collision carries on (separating the two objects).
    //  If it returns false the collision is assumed to have failed and aborts, no further checks or separation happen.

    console.log("collision!!");

  },

  gameOver: function() {
    // chargement du niveau suivant.
    game.state.start("sdb_load");
  },

  disapearlamp: function(player, lamp) {
    console.log("eteint la lamp");
    if (spaceKey.isDown) {
      lamp.loadTexture('lamp_active');
      lampEteinte = true;
      score++;
    }
    // if (score == 3) {
    //   this.gameOver();
    // }
  },

  stopTv: function(){
    if (spaceKey.isDown) {
      tv.loadTexture('tv_active');
      tvEteinte = true;
      score++;
    }
  },

  closeWindow: function(){
    if (spaceKey.isDown) {
      fenetre.loadTexture('fenetre');
      fenetreFermee = true;
      score++;
    }
  }

  // var game = new Phaser.Game(800, 600, Phaser.AUTO, "", {
  //   preload: preload,
  //   create: create,
  //   update: update
  // });
};
