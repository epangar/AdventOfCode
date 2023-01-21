const Solution2015 = require("../languages/Javascript-2015/Solution2015");

class GlobalSolution {
    constructor(){
        this.Javascript_2015 = new Solution2015();
        this.Python_2019 = 0;
        this.Typescript_2020 = 0;
    }

    getYear(year){
        return this[year];
    }
}

module.exports = GlobalSolution;