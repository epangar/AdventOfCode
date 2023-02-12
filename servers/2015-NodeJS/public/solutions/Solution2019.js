const importsPromise = require('../exercises/Python-2019/Imports_2019.js')

class Solution2019 {
    constructor(){
        this.year = 2019;
        this.imports = null; 
        this.loadSolution2019();
    }

    loadSolution2019(){
        return importsPromise.then((imports) => {
            this.imports = imports;
        });
    }

    async getDay(nInput){
        return this.imports[nInput];
    }
}

module.exports = Solution2019