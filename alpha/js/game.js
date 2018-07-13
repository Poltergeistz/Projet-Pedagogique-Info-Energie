var score = 0,
  seat,
  desk,
  bed,
  windowdown,
  player,
  platforms,
  cursors,
  stars,
  scoreText,
  itemacct,
  ordi,
  lamp,
  curtains,
  spaceKey,
  timer,
  timerEvent,
  myHealthBar;

var player_bounce = 0.0,
  player_gravity =  1000,
  player_scale = 1.0;

var game = new Phaser.Game(650, 455, Phaser.AUTO, "", {
  preload: preload,
  create: create,
  update: update
});

function preload() {
  // rooms :
  game.load.image("sky", "assets/rooms/bedroom.jpg");
  // objects :
  game.load.image("computer", "assets/objects/computer.jpg");
  game.load.image("curtains", "assets/objects/curtains.jpg");
  game.load.image("diamond", "assets/objects/diamond.png");
  game.load.image("firstaid", "assets/objects/firstaid.png");
  game.load.image("lamp", "assets/objects/lamp-on.jpg");
  game.load.image("star", "assets/objects/star.png");
  // characters :
  game.load.spritesheet("baddie", "assets/characters/baddie.png", 32, 45);
  game.load.spritesheet("dude", "assets/characters/dude.png", 32, 45);
  // others :
  game.load.image("bed", "assets/coliders/bedcollide.jpg");
  game.load.image("ground", "assets/coliders/platform.png");
  game.load.image("seat", "assets/coliders/seatcollide.jpg");
  game.load.image("table", "assets/coliders/tablecollide.jpg");
  game.load.image("window", "assets/coliders/windowcollide.png");
  // screens :
  game.load.image("sky2", "assets/gameover.jpg");
}

function create() {
  game.scale.startFullScreen();

  timer = game.time.create();
  //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);
  //  A simple background for our game
  game.add.sprite(0, 0, "sky");
  // var pour objets interactifs
  itemacct = game.add.group();
  itemacct.enableBody = true;
  // ordi
  ordi = itemacct.create(74, 182, "computer");
  ordi.body.immovable = true;
  //lampe
  lamp = itemacct.create(197, 211, "lamp");
  lamp.body.immovable = true;
  // fenetre
  curtains = itemacct.create(288, 30, "curtains");
  curtains.body.immovable = true;
  //  The platforms group contains the ground and the 2 ledges we can jump on
  platforms = game.add.group();
  //  We will enable physics for any object that is created in this group
  platforms.enableBody = true;

  // Here we create the ground.
  var ground = platforms.create(0, game.world.height - 15, "ground");

  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  ground.scale.setTo(2, 2);

  //  This stops it from falling away when you jump on it
  ground.body.immovable = true;

  //  On crée nos collisions
  var ledge = platforms.create(90, 322, "seat");
  ledge.body.immovable = true;
  ledge.body.collideWorldBounds = true;
  ledge.body.checkCollision.down = false;

  ledge = platforms.create(16, 274, "table");
  ledge.body.immovable = true;
  ledge.body.collideWorldBounds = true;
  ledge.body.checkCollision.down = false;

  ledge = platforms.create(338, 193, "window");
  ledge.body.immovable = true;
  ledge.body.collideWorldBounds = true;
  ledge.body.checkCollision.down = false;

  ledge = platforms.create(294, 296, "bed");
  ledge.body.immovable = true;
  ledge.body.collideWorldBounds = true;
  ledge.body.checkCollision.down = false;
  // The player and its settings
  player = game.add.sprite(
    game.world.width - 100,
    game.world.height - 150,
    "dude"
  );
  player.scale.setTo(player_scale);
  //  We need to enable physics on the player
  game.physics.arcade.enable(player);
  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = player_bounce;
  player.body.gravity.y = player_gravity;
  player.body.collideWorldBounds = true;
  //  Our two animations, walking left and right.
  player.animations.add("left", [0, 1, 2, 3], 10, true);
  player.animations.add("right", [5, 6, 7, 8], 10, true);
  //  Finally some stars to collect
  /* stars = game.add.group();
    //  We will enable physics for any star that is created in this group
    stars.enableBody = true;
    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 12; i++)
    {
        //  Create a star inside of the 'stars' group
        var star = stars.create(i * 70, 0, 'star');

        //  Let gravity do its thing
        star.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
	*/
  //  The score
  timerEvent = timer.add(Phaser.Timer.SECOND * 30, gameOver, this);
  timer.start();
  myHealthBar = new HealthBar(this.game, {
    width: 150,
    height: 10,
    x: 560,
    y: 15,
    bg: { color: "#651828" },
    bar: { color: "#FEFF03" },
    animationDuration: 200,
    flipped: false
  });
  myHealthBar.setPercent(100);
  //  Our controls.
  cursors = game.input.keyboard.createCursorKeys();
  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  //timerDisplay = game.add.text(80,19,timer,{font: "bold 14px sans-serif", fill:"#46c0f9", align:"center"});
}

function update() {
  myHealthBar.setPercent((timer.duration * 100) / 30000);
  //timerDisplay = game.add.text(30,20,"Energie: "+timer.duration,{font: "bold 12px sans-serif", fill:"#46c0f9", align:"center"});
  //  Collide the player and the stars with the platforms
  var hitPlatform = game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(stars, platforms);

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  game.physics.arcade.overlap(player, stars, collectStar, null, this);
  game.physics.arcade.overlap(player, ordi, disapearordi, null, this);
  game.physics.arcade.overlap(player, lamp, disapearlamp, null, this);
  game.physics.arcade.overlap(player, curtains, disapearcurtains, null, this);

  //  Reset the players velocity (movement)
  player.body.velocity.x = 0;

  if (cursors.left.isDown) {
    //  Move to the left
    player.body.velocity.x = -150;

    player.animations.play("left");
  } else if (cursors.right.isDown) {
    //  Move to the right
    player.body.velocity.x = 150;

    player.animations.play("right");
  } else {
    //  Stand still
    player.animations.stop();

    player.frame = 4;
  }

  //  Allow the player to jump if they are touching the ground.
  if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
    player.body.velocity.y = -350;
  }
}
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

function collectStar(player, star) {
  // Removes the star from the screen
  star.kill();
  //  Add and update the score
  score += 10;
}

function disapearordi(player, ordi) {
  if (spaceKey.isDown) {
    ordi.kill();
    score++;
  }
  if (score == 3) {
    gameOver();
  }
}

function disapearlamp(player, lamp) {
  if (spaceKey.isDown) {
    lamp.kill();
    score++;
  }
  if (score == 3) {
    gameOver();
  }
}

function disapearcurtains(player, curtains) {
  if (spaceKey.isDown) {
    curtains.kill();
    score++;
  }
  if (score == 3) {
    gameOver();
  }
}

function gameOver() {
  game.add.sprite(0, 0, "sky2");
}
