const getFilePaths = require('../utils/getFilePaths');
const fillInput = require('../utils/fillInput');

class Solution2 {
    constructor(){
        this.filePathExample = getFilePaths(2).filePathExample;
        this.filePath1 = getFilePaths(2).filePath1;

        this.inputExample = fillInput(this.filePathExample, this, 'inputExample')
        .then(() => {
            this.inputExample = this.parseInput(this.inputExample);
            this.example1 = this.calculateFirst(this.inputExample);
        });
        
        
       this.input = fillInput(this.filePath1, this, 'input')
        .then(() => {
            this.input = this.parseInput(this.input)
            this.part1 = this.calculateFirst(this.input);
            this.part2 = this.calculateSecond(this.input);
        });
    }

    parseInput(str){
        return str.split('\n').map(st => {
            let arr = st.split('x');
            return {
                l: arr[0],
                w: arr[1],
                h: arr[2],
            }
        })
    }

    calculateFirst(input){
        return input.map(obj =>{
            let first = (2 * obj.l * obj.w),
                second = (2 * obj.w * obj.h),
                third = (2 * obj.h * obj.l),
                minorSide = Object.values(obj)
                    .sort((a,b)=>a-b).slice(0,2)
                    .reduce((c,d)=>c*d)
        
                    return first + second + third + minorSide
        }).reduce((x,y)=> x+y)
    }

    calculateSecond(input){
        return input.map(obj => {
            let twoMinorSides = Object.values(obj)
                .map(val => parseInt(val))
                .sort((a,b)=>a-b).slice(0,2),
                present = twoMinorSides.map(n => n+n).reduce((c,d)=>c+d),
                bow = Object.values(obj).reduce((e,f)=>e*f);
                
                return present + bow;
        }).reduce((x,y)=> x+y)
    }
}

module.exports = Solution2