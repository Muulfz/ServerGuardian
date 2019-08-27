import DiscordBoot from '../Discord/Bot';


class NoDiscordNoGame {
    constructor() {
    }

    scanPlayer(req, res) {
        let member = DiscordBoot.findMember(req.body.discord);
        if (!member.voiceChannelID) {
            return res.status(200).send('offline');
        }
        return res.status(200).send('online');

    }
}

export default new NoDiscordNoGame();
