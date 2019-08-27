import config from "../../Config/Auth";

export default (req, res, next) => {
    if (req.headers.guardianauth === config.API.Token) {
        return next();
    }
    return res.status(200).send('erro-validacao');
}
