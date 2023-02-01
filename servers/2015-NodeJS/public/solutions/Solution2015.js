const imports = require('../exercises/Javascript-2015/Imports_2015')

class Solution2015 {
    constructor(){
        this.year = 2015;
    }

    getDay(nInput){
        return imports[nInput];
    }
}

module.exports = Solution2015