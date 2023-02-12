class GlobalSolution {
    constructor(){
        this.Javascript_2015 = null;
        this.Python_2019 = null;
        this.Typescript_2020 = null;
        this.init()
    }

    async init() {
        this.Javascript_2015 = await this.loadSolution2015();
        this.Python_2019 = await this.loadSolution2019();
    }

    getYear(year){
        year = year.toString()
        return this[year];
    }

    async loadSolution2015() {
        return new Promise((resolve, reject) => {
            const Solution2015 = require("../solutions/Solution2015");
            resolve(new Solution2015());
        });
    }
    async loadSolution2019() {
        return new Promise((resolve, reject) => {
            const Solution2019 = require("../solutions/Solution2019");
            resolve(new Solution2019());
        });
    }

    
}

module.exports = GlobalSolution;