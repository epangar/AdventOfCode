const express = require("express");
const router = express.Router();
const _ = require("lodash");
const GlobalSolution = require('../public/utils/GlobalSolution');
const yearLanguage = require('../public/utils/year-language')
const global = new GlobalSolution();



const loadDays = async (solutionKey = 'Javascript_2015',day=1) => {
  return global.getYear(solutionKey)
}

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
            solutionKey = `${language}_${year}`;

            loadDays(solutionKey, day).then(daySolution => {
              res.json({
                year: year,
                day: parseInt(id),
                part1: daySolution.imports[day].part1,
                part2: daySolution.imports[day].part2
              });
            }).catch(error => {
              console.error("Error inside promise = ", error);
              res.json({
                year: year,
                day: parseInt(id),
                part1: 0, 
                part2: 0
              });
            });
    }      
  });


module.exports = router;