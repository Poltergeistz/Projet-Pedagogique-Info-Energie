var introState = {

	preload: function () {
        var nameLabel = game.add.text(80, 80, 'VOTRE HISTOIRE COMMENCE \n ICI!',{ font: '50px Arial', fill: '#ffffff', align: 'center'});

        // player = game.add.sprite(16,16, "");
        // game.physics.enable(this.player, Phaser.Physics.ARCADE);

        // this.win = game.add.sprite(256,256, "");
        // game.physics.enable(this.win, Phaser.Physics.ARCADE);
	},

	create: function(){
		function delay(){
            setTimeout(function(){game.state.start('salon')},2000);
        }
        delay();
    },

    update: function(){

	},
}