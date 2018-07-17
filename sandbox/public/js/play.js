var playState = {
    create: function(){
        this.keyboard = game.input.keyboard;

        // this.player = game.add.sprite(16,16, "");
        // game.physics.enable(this.player, Phaser.Physics.ARCADE);

        // this.win = game.add.sprite(256,256, "");
        // game.physics.enable(this.win, Phaser.Physics.ARCADE);
    },

    update: function(){
        game.physics.arcade.overlap(this.player, this.win, this.win, null, this);

        // X axis
        if (this.keyboard.isDown(Phaser.Keyboard.Q)) {
            this.player.body.velocity.x = -175;
        } else if (this.keyboard.isDown(Phaser.Keyboard.D)){
            this.player.body.velocity.x = 175;
        } else {
            this.player.body.velocity.x = 0;
        }

        // Y axis
        if (this.keyboard.isDown(Phaser.Keyboard.Z)) {
            this.player.body.velocity.x = -175;
        } else if (this.keyboard.isDown(Phaser.Keyboard.S)){
            this.player.body.velocity.x = 175;
        } else {
            this.player.body.velocity.x = 0;
        }
    },

    win: function(){
        game.state.start('win');
    }

}