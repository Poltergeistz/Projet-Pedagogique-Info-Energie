var sdbLoadState = {
    preload: function () {

        // Array of Text
        var text = ["Éteignez la lumière en quittant la pièce",
            "Baisser le chauffage de 20 ° C à 19 ° C \n = - 7% de consommation d’énergie",
            "Dégivrer son réfrigérateur \n = évite une surconsommation d’environ 30 %",
            "Laver son linge à 30 °C  \n = 2 fois moins d’énergie qu’un lavage à 60 °C",
            "Couvrir les casseroles pendant la cuisson \n = 4 fois moins d’électricité ou de gaz consommés",
            "Si chaque ménage s’équipe en LED, on économise \n l’énergie d’une ville de 2 600 000 habitants",
            "Laissez entrer la lumière dans les pièces",
            "Utilisez un programmateur pour \n ne chauffer que lorsque vous êtes là",
            "Éteignez la lumière en quittant la pièce",
            "Fermez les volets et les rideaux la nuit \n pour garder la chaleur",
            "Éteignez votre ordinateur \n et débranchez vos chargeurs après usage",
            "Installez un mousseur sur les robinets \n pour économiser l’eau",
            "Placez vos appareils de froid \n loin des sources de chaleur",
            "Réglez votre chauffe-eau entre 55° et 60° C",
            "Remplissez bien vos machines \n (lave-linge et lave-vaisselle)",
            "1 bain = 5 douches !",
            "Aérez les pièces 5 à 10 mn par jour même en hiver",
            "Débranchez l’ordinateur \n (même éteint, il consomme de l'électricité)",
            "Débranchez les chargeurs après utilisation",
            "Évitez l'usage de radiateurs d'appoint électriques ou gaz",
            "Éteignez simultanément \n les appareils électriques, à l’aide d’une multiprise"
        ];
        // Random phrase generated from text Array 
        var randomPhrase = text[Math.floor(Math.random() * text.length)];
        console.log(randomPhrase);

        // Style 
        var style = { font: '20px Courier', fill: '#ffffff', align: 'center' };

        // Generated output 
        var loadingTitle = game.add.text(160, 250, randomPhrase, style);
        var loadingLabel = game.add.text(300, 150, 'Chargement...', { font: '30px Courier', fill: '#ffffff' });

    },
    create: function () {
        function delay(){
            setTimeout(function(){game.state.start('sdb')},load_time);
        }
        delay();
    }
}