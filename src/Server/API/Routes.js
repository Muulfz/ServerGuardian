import {Router} from 'express';
import NoDiscordNoGame from '../Services/NoDiscordNoGame';

const routes = new Router();

routes.post('/scan', NoDiscordNoGame.scanPlayer);


export default routes;
