const mysql = require('../lib/mysql');

const getNewsByMatchID = async params => {
    const statement = 'select id as newsId , title , description, matchId from news where matchId = ?';
    const parameters = [params.id];
    return await mysql.query(statement, parameters);
}

const getNewsByTourID = async params => {
    const statement = 'select id as newsId , title , description, tourId from news where tourId = ?';
    const parameters = [params.id];
    return await mysql.query(statement, parameters);
}

const getNewsBySportID = async params => {
    const statement = 'select n.id as newsId , n.title , n.description, n.tourId, s.id as sportId from news n inner join tours t on n.tourId = t.id ' +
                        'inner join sports s on t.sportId =s.id where s.id=?';
    const parameters = [params.id];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getNewsByMatchID: getNewsByMatchID,
    getNewsByTourID: getNewsByTourID,
    getNewsBySportID: getNewsBySportID
}