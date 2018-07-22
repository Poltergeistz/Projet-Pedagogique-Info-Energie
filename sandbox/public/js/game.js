var game = new Phaser.Game(800, 600, Phaser.AUTO, 'ecokid');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
// game.state.add('play', playState);

game.state.add('intro', introState);
game.state.add('salon', salonState);
game.state.add('sdb_load', sdbLoadState);
game.state.add('sdb', sdbState);

game.state.add('win', winState);

game.state.start('boot');