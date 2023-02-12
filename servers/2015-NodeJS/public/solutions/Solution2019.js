const importsPromise = require('../exercises/Python-2019/Imports_2019.js')



class Solution2019 {
    constructor(){
        this.year = 2019;
        this.imports = null; //It is null until the Python soluton solutions are fully loaded
        this.init();
        
    }

    init() {
        this.loadSolution2019()
            /* .then(() => {
                console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV-inside Solution2019.init, this = ", this);
            }); */
    }

    loadSolution2019(){
        //console.log("++++++++++++++++++++++++++inside Solution2019.loadSolution2019" );
        return importsPromise.then((imports) => {
            this.imports = imports;
            //console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV Solution2019.imports=", this.imports);
        });
    }

   /*  async init() {
        this.imports = await this.loadSolution2019();
        console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV-inside Solution2019.init, this = ",this)
    }

    async loadSolution2019(){
        console.log("++++++++++++++++++++++++++inside Solution2019.loadSolution2019" )
        //const self = this;
        this.imports = await importsPromise
        console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV Solution2019.imports=", this.imports)
    } */

    async getDay(nInput){
        console.log("Inside Solution2019.getDay")
        console.log("Input = ", nInput)
        
        console.log("this.imports = ", this.imports)
        console.log("this.imports[nInput] = ", this.imports[nInput])
        return this.imports[nInput];
    }
}


/* const Solution2019Promise = new Promise((resolve, reject)=>{
    if(Solution2019.imports){
        resolve(Solution2019)
        module.exports = Solution2019
    }
})
 */
module.exports = Solution2019