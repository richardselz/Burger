var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var theObj = {
            burgers: data
        };
        console.log(theObj);
        res.render("index", theObj);
    });
});

router.post("/", function(req,res) {
    burger.insertOne([
        "burgerType", "devoured"
    ], [
        req.body.burgerType, false
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req,res) {
    var condition = "id = "+req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function() {
        res.redirect("/");
    });
});

router.delete("/:id", function(req,res) {
    var condition = "id = "+req.params.id;

    burger.deleteOne(condition, function() {
        res.redirect("/");
    });
});

module.exports = router;