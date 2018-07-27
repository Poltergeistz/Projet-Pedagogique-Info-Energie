var introState = {
  preload: function() {
    // player = game.add.sprite(16,16, "");
    // game.physics.enable(this.player, Phaser.Physics.ARCADE);
    // this.win = game.add.sprite(256,256, "");
    // game.physics.enable(this.win, Phaser.Physics.ARCADE);
  },

  create: function() {
    game.add.sprite(0, 0, "landscape_background");

    var nameLabel = game.add.text(
      80,
      250,
      `Le Professeur Energeox, fou de puissance, a rétrécie notre hero Ecokid. 
      Votre but, est d'utiliser les gestes eco-responsables afin de priver 
      Energeox de son pouvoir et, ainsi, retrouver votre taille normale.`,
      { font: "20px Arial", fill: "#ffffff", align: "center" }
    );

    setTimeout(function() {
        game.state.start("chambre_load");
    }, load_time);
  },

  update: function() {

  }
};
