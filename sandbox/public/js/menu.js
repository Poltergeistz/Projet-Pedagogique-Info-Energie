
var menuState = {

    preload: function(){
    	game.load.spritesheet('button', 'assets/ui/btn_loading.png', 195, 32);
    	// game.load.image('background','assets/misc/starfield.jpg');
        var nameLabel = game.add.text(350, 80, 'ECOKID',{ font: '50px Arial', fill: '#ffffff'});
    },
    create: function(){
        game.add.sprite(0, 0, "sky");
	    button = game.add.button(game.world.centerX - 95, 400, 'button', this.onUp, this, 1, 0, 1);
	},
    update: function(){
    
    },

	onUp: function () {
		console.log("Un clic a été effectué sur le button");
		game.state.start('intro');
	}
}