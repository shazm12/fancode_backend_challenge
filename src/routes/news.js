const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/match/news').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsByMatchID(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/tour/news').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsByTourID(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/sport/news').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsBySportID(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}