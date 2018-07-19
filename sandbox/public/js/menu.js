var menuState = {
    create: function(){
        var nameLabel = game.add.text(300, 220, 'Ecokid',{ font: '50px Arial', fill: '#ffffff'});

        var startLabel = game.add.text(80, game.world.height-80, 'press the "W" key to start',{ font: '25px Arial', fill: '#ffffff'});

        var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        wKey.onDown.addOnce(this.start, this);
    },
    start: function(){
        game.state.start('play');
    }
}