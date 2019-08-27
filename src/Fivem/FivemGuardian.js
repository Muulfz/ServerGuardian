const config = require(`${GetResourcePath(GetCurrentResourceName())}/src/Server/Config/Auth.js`);

function initAPI() {
    const child_process = require('child_process');
    child_process.exec('start "Guardian API" cmd.exe /k "TITLE GUARDIAN API & cd resources/ServerGuardian & yarn start"');
}

const onlinePlayers = [

];

function scanDiscord(player) {
    emit("scanRequest", player,`http://${config.API.Host}:${config.API.Port}/scan`,config.API.Token);
}

function kickNonDiscord(player) {
    DropPlayer(player, "Entre no discord para jogar");
}


on('ServerGuardianDrop', (player) => {
    kickNonDiscord(player.source)
});



on('playerConnecting', (name, setKickReason, deferrals) => {
    let player = global.source;
    let DiscordID = null;

    for (let i = 0; i < GetNumPlayerIdentifiers(player); i++) {
        let identifier = GetPlayerIdentifier(player, i);
        if (identifier.includes('discord:')) {
            let id = identifier.split(':');
            DiscordID = id[1];
        }
    }

    if (DiscordID === null) {
        player.kick('Entre no discord para Jogar');
        return;
    }

    onlinePlayers.push({'source': player, 'discord': DiscordID});

});


on('playerDropped', (reason) => {
    let player = global.source;
    onlinePlayers.splice(onlinePlayers.findIndex(o => o.source === player), 1);
});


setInterval(function () {

    onlinePlayers.forEach(player => {
        scanDiscord(player);
    })

}, 10000);


initAPI();
