const imports = require('../exercises/Javascript-2015/Imports_2015')

class Solution2015 {
    constructor(){
        this.year = 2015;
        this.imports = imports;
        //this.imports = this.modelImports(imports);
    }

    getDay(nInput){
        return this.imports[nInput];
    }

    modelImports(oInput){
        for(const element in oInput){
            const day = element, solution = oInput[day];
            const part1 = solution.part1;
            const part2 = solution.part2;
            console.log("Inside modelImports, ", element)
            console.log(part1, part2 )
        }
    }
}

module.exports = Solution2015