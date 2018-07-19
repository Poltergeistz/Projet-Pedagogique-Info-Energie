var des, bed;

var player_bounce = 0.0,
  player_gravity =  1000,
  player_scale = 1.0;

var game = new Phaser.Game(800, 600, Phaser.AUTO, "", {
  preload: preload,
  create: create,
  update: update
});

function preload() {
  // rooms :
  game.load.image("sky", "sdb/sky.png");
  // objects :
  game.load.image("double_lavabo", "sdb/sdb_double_lavabo.png");
  game.load.image("double_lavabo", "sdb/sdb_douche.png");
  game.load.image("etagere1", "sdb/sdb_etagere01.png");
  game.load.image("etagere2", "sdb/sdb_etagere02.png");
  game.load.image("meuble", "sdb/sdb_meuble.png");
  game.load.image("peignoire", "sdb/sdb_peignoire.png");
  game.load.image("double_lavabo", "sdb/sdb_porteserviette.png");
  game.load.image("double_lavabo", "sdb/sdb_toilettes.png");
  game.load.image("double_lavabo", "sdb/sdb_pq.png");

  // Salon
  game.load.image("buffet","salon/salon_buffet.png");
  game.load.image("lamp","salon/salon_buffet_lamp.png");
  game.load.image("chaise","salon/salon_chaise.png");
  game.load.image("etagere3","salon/salon_etagere.png");
  game.load.image("fenetre","salon/salon_fenetre.png");
  game.load.image("porte","salon/salon_porte.png");
  game.load.image("tv","salon/salon_tv.png");
  // game.load.sprite("ecokid", "assets/character/hero_sprite.png", 32, 45);
}

function create() {

  // Generated output 
  // var loadingTitle = game.add.text(game.world.centerX-300, 0, randomPhrase, style);

  // Fullscreen
  // game.scale.startFullScreen();

  //  A simple background for our game
  game.add.sprite(0, 0, "sky");
  // game.add.sprite(400 - 64, 450 - 64, "double_lavabo");

  // Salon
  game.add.sprite(650,450,"buffet");
  game.add.sprite(650,418,"lamp");
  game.add.sprite(100,450,"chaise");
  game.add.sprite(270,450,"chaise").scale.x*=-1;
  game.add.sprite(200,380,"etagere3");
  game.add.sprite(485,380,"fenetre");
  game.add.sprite(400 - 64, 450 - 64,"porte");
  game.add.sprite(150,450,"tv");
  // game.add.sprite(100, 300, "ecokid", "assets/character/hero_sprite.png");

  // var pour objets interactifs
  // itemacct = game.add.group();
  // itemacct.enableBody = true;
  // // ordi
  // ordi = itemacct.create(74, 182, "computer");
  // ordi.body.immovable = true;
 
  // fenetre
  // curtains = itemacct.create(288, 30, "curtains");
  // curtains.body.immovable = true;
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
  // var ledge = platforms.create(90, 322, "seat");
  // ledge.body.immovable = true;
  // ledge.body.collideWorldBounds = true;
  // ledge.body.checkCollision.down = false;

}

function update() {
  
  // game.physics.arcade.overlap(player, lamp, disapearlamp, null, this);
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

function gameOver() {
  game.add.sprite(0, 0, "sky2");
}

function render(){
  game.debug.body("lamp");
}