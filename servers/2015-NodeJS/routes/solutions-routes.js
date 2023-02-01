const express = require("express");
const router = express.Router();
const _ = require("lodash");
const GlobalSolution = require('../public/utils/GlobalSolution');
const global = new GlobalSolution();
const yearLanguage = require('../public/utils/year-language')
const {spawn} = require('child_process');


/* GET home page */
router.get('/', (req, res, next) => {
  res.json({
    year: 2015,
    day: 1,
    part1: 0, 
    part2: 0
  }) 
});


// Retrieve Year + day
router.get("/:year/:id", (req, res, next) => {
  if(req.params.id !== 'version'){

    const id = req.params.id,
          day = `day${id}`,
          year = req.params.year,
          language = yearLanguage[year],
          solutionKey = `${language}_${year}`,
          yearSolution = global.getYear(solutionKey),
          daySolution = yearSolution.getDay(day)
          
    res.json({
      year: year,
      day: parseInt(id),
      part1: daySolution.part1 ? daySolution.part1 : 0, 
      part2: daySolution.part2 ? daySolution.part2 : 0
    }) 
  }      
});




/* // Retrive DETAIL
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
        
}); */


module.exports = router;