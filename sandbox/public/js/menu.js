
var menuState = {

    preload: function(){
    	game.load.spritesheet('button', 'assets/ui/btn-loading.png', 195, 32);
    	// game.load.image('background','assets/misc/starfield.jpg');
    
        var nameLabel = game.add.text(80, 80, 
            "Le pitch sur le professeur energeox"
            ,{ font: '50px Arial', fill: '#ffffff', align: 'center'});

    },
    create: function(){
        game.add.sprite(0, 0, "sky");
	    button = game.add.button(game.world.centerX - 95, 400, 'button', this.onUp, this, 1, 0, 1);

        nameLabel = game.add.text(310, 200, 'Eco Kid',{ font: '50px Arial', fill: '#ffffff'});
	},
    update: function(){
    
    },
	onUp: function () {
		console.log("Un clic a été effectué sur le button");
		game.state.start('intro');
	}
}