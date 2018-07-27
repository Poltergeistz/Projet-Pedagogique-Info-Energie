var winState = {
    create: function(){
        game.add.sprite(0, 0, "landscape_background");

        var winLabel = game.add.text(80,80, `Vos gestes ont façonné le monde à tout jamais. 
        Energeox, suite à vos gestes eco-responsables fû desactivé, et votre taille restaurée...
        Souvenez-vous, pratiquer ces gestes sont bénéfiques pour vous comme pour les autres.
        
        « Pour ce qui est de l’avenir, il ne s’agit pas de le prévoir mais de le rendre possible. »
         - Antoine de Saint-Exupéry`, { font: '15px Arial', fill: '#ffffff'});

         setTimeout(function() {
            game.state.start("menu");
          }, 9000);
    }
}