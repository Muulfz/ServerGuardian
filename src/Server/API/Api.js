import Express from 'express';
import discordBot from "../Discord/Bot";
import routes from './Routes';

class Api {
    constructor() {
        this.server = Express();
        this.server.use(Express.json());

        this.routes();
    }

    routes() {
        this.server.use(routes)
    }
}


export default new Api();
