import DiscordBoot from './Discord/Bot';
import config from './Config/Auth';
import Api from './API/Api';


class Server {
    constructor() {
        this.api = Api;
        this.bot = DiscordBoot;

    }

    run() {
        this.api.server.listen(config.API.Port);
        this.bot.discordClient.login(config.DiscordBot.Token);
    }

}

export default new Server();
