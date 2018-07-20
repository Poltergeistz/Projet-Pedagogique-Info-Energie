var sdbState = {

    create: function () {

        // Background
        game.add.sprite(0, 0, "sky");

        // House

        // Salle de Bain
        game.add.sprite(50, 300, "etagere1");
        game.add.sprite(650, 300, "etagere2");
        game.add.sprite(100, 400, "meuble");
        game.add.sprite(200, 400, "douche");
        game.add.sprite(300, 400, "porteserviette");
        game.add.sprite(400 - 64, 400, "double_lavabo");
        game.add.sprite(500, 350, "peignoire");
        game.add.sprite(600, 450, "toilettes");
        game.add.sprite(700, 450, "pq");

        // Collision

        //myHeroSprite.body.collideWorldBounds=true;

    },
    update: function(){
        game.state.start('chambre');
    }

}