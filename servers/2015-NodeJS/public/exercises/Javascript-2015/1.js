const getFilePaths = require('../../utils/getFilePaths');
const fillInput = require('../../utils/fillInput');

class Solution1 {
    constructor(){
        //this.filePathExample = getFilePaths(2015,1).filePathExample;
        this.filePath1 = getFilePaths(1, __dirname).filePath1;
        /* this.inputExample = fillInput(this.filePathExample, this, 'inputExample')
        .then(() => {
            this.example1 = this.calculateFirst(this.inputExample);
        }); */
        
        this.input = fillInput(this.filePath1, this, 'input')
        .then(() => {
            this.part1 = this.calculateFirst(this.input);
            this.part2 = this.calculateSecond(this.input);
        });

    }

    calculateFirst(input){
        return [...input]
                .map(char => char === '(' ? 1 : -1)
                .reduce((a,b)=>a+b)
    }

    calculateSecond(input){
        let position = 0;
        
        for(let i = 0; i <= input.length; i++){
            let current = input[i];
            
            if(current === '('){
                position++;
            } else {
                position--
            }
            
            if(position < 0){
                return i+1;
            }
        }
    }
}

module.exports = Solution1