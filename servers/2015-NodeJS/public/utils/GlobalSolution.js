const Solution2015 = require("../solutions/Solution2015");
const Solution2019 = require("../solutions/Solution2019");

class GlobalSolution {
    constructor(){
        this.Javascript_2015 = new Solution2015();
        this.Python_2019 = new Solution2019();
        this.Typescript_2020 = 0;
    }

    getYear(year){
        console.log("inside get year, ", year)
        return this[year];
    }
}

module.exports = GlobalSolution;