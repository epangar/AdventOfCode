const readInputFile = require( '../utils/readInputFile');
const getFilePaths = require('../utils/getFilePaths');


class Solution1 {
    constructor(){
        this.filePathExample = getFilePaths(1).filePathExample;
        this.filePath1 = getFilePaths(1).filePath1; //= filePath1;
        this.filePath2 = getFilePaths(1).filePath2; //= filePath2;
        this.inputExample = this.fillInput(this.filePathExample, 'inputExample');
        //this.input1 = readInputFile(this.filePath1);
        //this.input2 = readInputFile(this.filePath2);
        this.example1 = this.calculateFirst(this.inputExample);
        //this.example2 = this.calculateSecond(this.inputExample);
        this.part1 =  90 || this.calculateFirst(this.input1);
        this.part2 = 123 || this.calculateSecond(this.input2); 
        
        setTimeout(()=>{console.log(">>>>>> this = ", this)}, 4000)
    }

    fillInput(input, prop){
        return readInputFile(input, prop).then(data =>{
            this[prop] = data;
        })
    }


    calculateFirst(input){
        
        
    }

    calculateSecond(input){
        
    }
}

module.exports = Solution1