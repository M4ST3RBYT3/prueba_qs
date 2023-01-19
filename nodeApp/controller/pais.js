const db = require('../db').connection

const getPaises = (request, response) => {
    db.query('SELECT * FROM pais', function (error, results, fields) {
        if (error) throw error;
        response.status(200).json(results)
    });
}

module.exports = {
    getPaises
}