var loadState = {
    preload: function () {

        var loadingLabel = game.add.text(80, 150, 'Loading...', { font: '30px Courier', fill: '#ffffff' });

        // Sky
        game.load.image("sky", "assets/sdb/sky.png");
        // Salle de bain :
        game.load.image("double_lavabo", "assets/sdb/sdb_double_lavabo.png");
        game.load.image("douche", "assets/sdb/sdb_douche.png");
        game.load.image("etagere1", "assets/sdb/sdb_etagere01.png");
        game.load.image("etagere2", "assets/sdb/sdb_etagere02.png");
        game.load.image("meuble", "assets/sdb/sdb_meuble.png");
        game.load.image("peignoire", "assets/sdb/sdb_peignoire.png");
        game.load.image("serviette", "assets/sdb/sdb_porteserviette.png");
        game.load.image("toilettes", "assets/sdb/sdb_toilettes.png");
        game.load.image("pq", "assets/sdb/sdb_pq.png");

        // Salon
        game.load.image("buffet", "assets/salon/salon_buffet.png");
        game.load.image("lamp", "assets/salon/salon_buffet_lamp.png");
        game.load.image("chaise", "assets/salon/salon_chaise.png");
        game.load.image("etagere3", "assets/salon/salon_etagere.png");
        game.load.image("fenetre", "assets/salon/salon_fenetre.png");
        game.load.image("porte", "assets/salon/salon_porte.png");
        game.load.image("tv", "assets/salon/salon_tv.png");
    },
    create: function(){
        game.state.start('menu');
    }
}