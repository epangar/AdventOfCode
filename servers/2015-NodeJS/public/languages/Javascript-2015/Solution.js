const imports = require('../utils/Imports')

class Solution {
    constructor(){
        this.year = 2015;
    }

    getDay(nInput){
        return imports[nInput];
    }
}

module.exports = Solution