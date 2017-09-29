var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
    }

    // Helper function for SQL syntax.
    function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
        arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM "+tableInput+";";
        connection.query(queryString, function(err, res) {
            if(err) throw err;
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table+" ("+cols.toString()+") VALUES ("+printQuestionMarks(vals.length)+");");
        console.log(queryString);

        connection.query(queryString, vals, function(err, res) {
            if(err) throw err;
            cb(res);
        });
    }, 
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE "+table+" SET "+objToSql(objColVals)+" WHERE "+condition+";";
        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if(err) throw err;
            cb(res);
        });
    },
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM "+table+" WHERE "+condition+";";
        console.log(queryString);
        connection.query(queryString, funciton(err,res) {
            if(err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;