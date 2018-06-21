var express = require("express");

var burgerModel = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req,res) {
  burgerModel.burgers(function(resultsFromDB){
    console.log("This is the results from DB.",resultsFromDB);
    res.render("index", {burgerData: resultsFromDB});
  });

})

router.post("/createBurger", function(req,res) {
  burgerModel.insertedBurger(req.body.burgerName);
  res.redirect("/");
})

router.put("/:id", function(req, res) {
  var { id } = req.params;
  const { devoured } = req.body;
  burgerModel.updatedBurger(devoured, id);
  res.redirect("/");
})

module.exports = router;