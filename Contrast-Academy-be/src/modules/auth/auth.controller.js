const service = require('./auth.service');

exports.register = async (req, res) => {
    try {
        const data = await service.register(req.body);
        res.json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const data = await service.login(req.body);
        res.json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};