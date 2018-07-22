var introState = {

	preload: function () {

        var nameLabel = game.add.text(80, 80, 
            "Le pitch sur le professeur energeox"
            ,{ font: '30px Arial', fill: '#ffffff', align: 'center'});

        // player = game.add.sprite(16,16, "");
        // game.physics.enable(this.player, Phaser.Physics.ARCADE);

        // this.win = game.add.sprite(256,256, "");
        // game.physics.enable(this.win, Phaser.Physics.ARCADE);
	},

	create: function(){
		function delay(){
            setTimeout(function(){game.state.start('salon')},3500);
        }
        delay();
    },

    update: function(){

	},
}