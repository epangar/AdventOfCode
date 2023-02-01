//const {spawn} =require('child_process')
const imports = require('../exercises/Python-2019/Imports_2019.js')



class Solution2019 {
    constructor(){
        this.year = 2019;
        
    }

    getDay(nInput){
        console.log("Inside Solution2019.getDay")
        console.log("Input = ", nInput)
        /* const imports_py = spawn('python', imports)
        console.log("imports_py = ",imports_py) */
        console.log(imports[nInput])
        return imports[nInput];
    }
}

module.exports = Solution2019