const getFilePaths = require('../../utils/getFilePaths');
const fillInput = require('../../utils/fillInput');

class Solution5 {
    constructor(){
        this.filePathExample = getFilePaths(2015,5).filePathExample;
        this.filePath1 = getFilePaths(2015,5).filePath1;
        this.vowels = 'aeiou';
        this.strings = ['ab', 'cd', 'pq', 'xy'];
        this.inputExample = fillInput(this.filePathExample, this, 'inputExample')
        .then(() => {
            this.inputExample = this.parseInput(this.inputExample);
            this.example1 = this.calculateFirst(this.inputExample);
        });
        
        this.input = fillInput(this.filePath1, this, 'input')
        .then(() => {
            this.input = this.parseInput(this.input);
            this.part1 = this.calculateFirst(this.input);
            this.part2 = this.calculateSecond(this.input);
            /* console.log(">>>Ex2>>",this.example2)
            console.log(">>>Pt2>>",this.part2) */
            
        });

    }

    parseInput(input){
        return input.split('\n')
    }

    calculateFirst(inputArr){
        return inputArr.filter(str =>  this.isNice(str)).length 
    }

    calculateSecond(inputArr){
        return inputArr.filter(str => {
            return this.isNiceSecond(str)
        }).length
    }

    isNice(inputStr){
        return this.numberOfVowels(inputStr) >=3
                && this.containsTwiceInARow(inputStr)
                && this.containStrings(inputStr);
    }

    isNiceSecond(inputStr){
        const twoPairs = this.twoPairsNoOverlap(inputStr); 
        
        return this.repeatsWithOneLetterBetweenThem(inputStr) 
            && (twoPairs !== null && twoPairs.length > 0)
    }

    numberOfVowels(inputStr){
        let answer = inputStr.match(/[aeiou]/g)//It contains vowels
        return answer === null ? 0 : answer.length;
    }

    containsTwiceInARow(inputStr){
        for(let i = 0, len = inputStr.length; i < len -1; i++){
            let current = inputStr[i].toLowerCase(),
                next = inputStr[i+1].toLowerCase();
            
            if(current === next){
                return true;
            }
        }
        return false;
    }

    containStrings(inputStr){
        let answer = inputStr.match(/ab|cd|pq|xy/) //It contains ab|cd|pq|xy
        return answer === null ;
    }

    twoPairsNoOverlap(inputStr){
        return inputStr.match(/([a-z][a-z])[a-z]*\1/)
    }

    repeatsWithOneLetterBetweenThem(inputStr){
        return inputStr.match(/([a-z])[a-z]\1/)
    }

}

module.exports = Solution5