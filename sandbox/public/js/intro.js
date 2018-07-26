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
      80,
      `Le pitch sur le professeur energeox
      
      Peut etre un texte défilant à la star wars ?
      Ou
      Unbackground defilant`,
      { font: "30px Arial", fill: "#ffffff", align: "center" }
    );

    setTimeout(function() {
        game.state.start("chambre_load");
    }, load_time);
  },

  update: function() {

  }
};
