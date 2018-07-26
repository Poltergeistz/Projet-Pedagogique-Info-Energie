var winState = {
    create: function(){

        var winLabel = game.add.text(80,80, `Vos gestes ont façonné le monde à tout jamais. 
        Energeox, suite à vos gestes eco-responsables fû desactivé, et votre taille restaurée...
        Souvenez-vous, pratiquer ces gestes sont bénéfiques pour vous comme pour les autres.
        
        « Pour ce qui est de l’avenir, il ne s’agit pas de le prévoir mais de le rendre possible. »
         - Antoine de Saint-Exupéry`, { font: '15px Arial', fill: '#00FF00'});

        var startLabel = game.add.text(80, game.world.height-80, 'press the "W" key to restart', { font: '25px Arial', fill: '#ffffff'})
   
        var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        wKey.onDown.addOnce(this.start, this);
    },
    restart: function(){
        game.state.start('menu');
    }
}