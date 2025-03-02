const db = require("./connection.js")

module.exports = {
    getAllPetsOf: (petType) =>{
        return new Promise((resolve, reject) =>{
            const q = 'SELECT * from pets, where type = ?'

            db.query(q, [petType], (error, results) =>{
                if (error) reject(error);
                else resolve(results);
            })
        })
    }
}