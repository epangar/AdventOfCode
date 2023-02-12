/* const Solution2015 = require("../solutions/Solution2015");
 *///const Solution2019 = require("../solutions/Solution2019");

class GlobalSolution {
    constructor(){
        this.Javascript_2015 = null;
        this.Python_2019 = null;
        this.Typescript_2020 = null;
        this.init()
    }

    async init() {
        console.log("------------------inside GlobalSolution.init", )
        this.Javascript_2015 = await this.loadSolution2015();
        this.Python_2019 = await this.loadSolution2019();
        debugger
        console.log("-------------------inside GlobalSolution.init, this = ",this)
    }

    getYear(year){
        debugger
        //console.log("---------------------------------inside get year, ", year)
        year = year.toString()
        //console.log("inside get year, ", year)
        //await this.init()

        //console.log("this[year], ", this[year])
        return this[year];
    }

    async loadSolution2015() {
        return new Promise((resolve, reject) => {
            console.log("inside GlobalSolution.loadSolution2015", )
            const Solution2015 = require("../solutions/Solution2015");
            console.log("loaded Solution2019", )
            
            resolve(new Solution2015());
        });
    }
    async loadSolution2019() {
        return new Promise((resolve, reject) => {
            console.log("-----------------------------inside GlobalSolution.loadSolution2019", )
            const Solution2019 = require("../solutions/Solution2019");
            
            
            debugger
            
            resolve(new Solution2019());
            
            
        });
    }

    
}

module.exports = GlobalSolution;