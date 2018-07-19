
var menuState = {
    
	// button: "",

    preload: function(){
    	console.log("preload: ");

    	game.load.spritesheet('button', 'assets/ui/btn_loading.png', 195, 32);
    	game.load.image('background','assets/misc/starfield.jpg');
        var nameLabel = game.add.text(80, 80, 'My first game',{ font: '50px Arial', fill: '#ffffff'});
        // var startLabel = game.add.text(80, game.world.height-80, 'press the "enter" key to start',{ font: '25px Arial', fill: '#ffffff'});
    },
    create: function(){
    	console.log("create : ");
	    button = game.add.button(game.world.centerX - 95, 400, 'button', this.onUp, this, 1, 0, 1);
	    // button.onInputOver.add(over, this);
	    // button.onInputOut.add(out, this);
	    // button.onInputUp.add(up, this);
	},
    update: function(){
    	// var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.Enter);
        // enterKey.onDown.addOnce(this.start, this);
    	console.log("update : ");
    },

	onUp: function () {
		console.log("Un clic a été effectué sur le button");
		game.state.start('intro');
	}
}