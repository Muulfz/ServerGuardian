import config from "../Config/Auth";

const Discord = require('discord.js');

class Bot {
    constructor() {
        this.discordClient = new Discord.Client();
    }

    findMember(discordID) {
        return this.discordClient.guilds.find(s => s.id === config.SERVER.id)
            .member(discordID);
    }
}

const discordBot = new Bot();
Object.freeze(discordBot);

export default discordBot;
