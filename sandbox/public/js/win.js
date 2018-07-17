var winState = {
    create: function(){

        var winLabel = game.add.text(80,80, 'YOU WON!', { font: '50px Arial', fill: '#00FF00'});

        var startLabel = game.add.text(80, game.world.height-80, 'press the "enter" key to restart', { font: '25px Arial', fill: '#ffffff'})
   
        var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.Enter);

        enterKey.onDown.addOnce(this.start, this);
    },
    restart: function(){
        game.state.start('menu');
    }
}