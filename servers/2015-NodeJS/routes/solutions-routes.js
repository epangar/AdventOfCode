const express = require("express");
const router = express.Router();
const _ = require("lodash");
const Solution = require("../public/javascript/classes/Solution");
const solution = new Solution();

/* GET home page */
router.get('/', (req, res, next) => {
   const keys = Object.keys(solution).map((key, position) => {
      const numberDay = position + 1
      return {
          "name" : `Day ${numberDay}`,
          "number": numberDay,
          "url" : `/solutions/${numberDay}`
      }
    });
    res.render('index', {
    solutions : keys
  })
});



// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  const id = req.params.id,
        day = `day${id}`;
        
  res.render('solution', {
    currentDay: id,
    mySolution: solution[day]
  })
});


module.exports = router;