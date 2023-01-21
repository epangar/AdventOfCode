const express = require("express");
const router = express.Router();
const _ = require("lodash");
const Solution = require("../public/languages/Javascript-2015/Solution2015");
const solution = new Solution();
const {spawn} = require('child_process');


/* GET home page */
router.get('/', (req, res, next) => {
   const keys = new Array(25).fill(1).map((key, position) => {
      const numberDay = key + position
      return {
          "name" : `Day ${numberDay}`,
          "number": numberDay,
          "url" : `/2015/${numberDay}`
      }
    });
    res.render('index', {
    solutions : keys
  })
});


// Retrieve Year + day
router.get("/:year/:id", (req, res, next) => {
  const id = req.params.id,
        day = `day${id}`,
        year = req.params.year,
        daySolution = solution.getDay(day);

  res.json({
    year: year,
    day: parseInt(id),
    part1: daySolution  ? daySolution.part1 : 0, 
    part2: daySolution  ? daySolution.part2 : 0
  })
        
});




// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  const id = req.params.id,
        day = `day${id}`,
        year = solution.year,
        daySolution = solution.getDay(day);

  res.json({
    year: year,
    day: parseInt(id),
    part1: daySolution  ? daySolution.part1 : 0, 
    part2: daySolution  ? daySolution.part2 : 0
  })
        
});


module.exports = router;