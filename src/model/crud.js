const mysqlConnection = require("../../config/dbAuth.js")

module.exports = {
    /**
     * Model for createOperation
     * @param {*} data 
     * @param {*} callback 
     */
    createOperation: function(data, callback) {
        let sample = {
            demo_text : data.text,
        }
        mysqlConnection.query('INSERT INTO crud SET ?',sample, callback);
    },
    /**
     * Model for ReadOperation
     * @param {*} id 
     * @param {*} callback 
     */
    readOperation: function(id, callback) {
        mysqlConnection.query('SELECT * FROM crud WHERE id = ?',id, callback);
    },
    /**
     * Model for updateOperation
     * @param {*} data 
     * @param {*} callback 
     */
    updateOperation: function(data, callback) {
        let sample = {
            text : data.text,
            id : data.id,
        }
        let query = 'UPDATE crud SET demo_text = ? WHERE id=?'
        mysqlConnection.query(query,[sample.text,sample.id], callback);
    },
    /**
     * Model for deleteOperation
     * @param {*} id 
     * @param {*} callback 
     */
    deleteOperation: function(id, callback) {
        mysqlConnection.query('DELETE FROM crud WHERE id = ?',id, callback);
    },
}