const crud = require("../model/crud")

module.exports = {
    /**
     * Index function for root URL
     * @param {*} request
     * @param {*} response
     */
    index: function(req, res) {
        res.render("index");
    },
    /**
     * Create Record function 
     * @param {*} request
     * @param {*} response
     */
    create: function(req, res) {
        crud.createOperation(req.body, function(error, results, fields) {
            if (error) throw error;
            res.send({
                success : true,
                operation : "CREATE",
                id : results.insertId,
            });
        });
    },
    /**
     * Read Operation for request
     * @param {*} request
     * @param {*} response
     */
    read: function(req, res) {
        crud.readOperation(req.query.id, function(error, results, fields) {
            if (error) throw error;
            res.send(results);
        });
    },
    /**
     * Update request
     * @param {*} request
     * @param {*} response
     */
    update: function(req, res) {
        crud.updateOperation(req.body, function(error, results, fields) {
            if (error) throw error;
            res.send({
                success : true,
                operation : "UPDATE",
            });
        });
    },
    /**
     * Delete request
     * @param {*} request
     * @param {*} response
     */
    delete: function(req, res) {
        crud.deleteOperation(req.query.id, function(error, results, fields) {
            if (error) throw error;
            res.send({
                success : true,
                operation : "DELETE",
            });
        });
    },

}