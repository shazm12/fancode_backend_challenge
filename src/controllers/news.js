const News = require('../models/news');

const getNewsByMatchID = async params => {
    const { id } = params;
    if (!id) {
        throw new Error('Missing required parameter: id');
    }
    return await News.getNewsByMatchID(params);
}

const getNewsByTourID = async params => {
    const { id } = params;

    if (!id) {
        throw new Error('Missing required parameter: id');
    }

    return await News.getNewsByTourID(params);
}

const getNewsBySportID = async params => {
    const { id } = params;

    if (!id) {
        throw new Error('Missing required parameter: id');
    }

    return await News.getNewsBySportID(params);
}

module.exports = {
    getNewsByMatchID: getNewsByMatchID,
    getNewsByTourID: getNewsByTourID,
    getNewsBySportID : getNewsBySportID
}