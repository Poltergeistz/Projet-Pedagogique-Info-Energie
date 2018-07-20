var salonState = {

    // Create the Level 
    create: function(){

        // Background
        game.add.sprite(0, 0, "sky");

        // House

        // Salon sprites
        game.add.sprite(650,450,"buffet");
        game.add.sprite(650,418,"lamp");
        game.add.sprite(100,450,"chaise");
        game.add.sprite(270,450,"chaise").scale.x*=-1;
        game.add.sprite(200,380,"etagere3");
        game.add.sprite(420,380,"fenetre");
        game.add.sprite(400 - 64, 450 - 64,"porte");
        game.add.sprite(150,450,"tv");

        // Hero

        this.hero = game.add.spritesheet(400, 400, "ecokid");
        this.hero.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9], 12, true);
        this.hero.animations.play('walk');

        // Collision

        //myHeroSprite.body.collideWorldBounds=true;
    },

    // If the player successfully finds all objects -  Then

    /* Launch the Arrow function which make an arrow apear on screen, in order to navigate to the next
        level, use 'E' on arrow to load it. */
 
    // Else highlight elements that the player haven't found and move to the next level.
    update: function(){
        game.state.start('sdb');
    }

}