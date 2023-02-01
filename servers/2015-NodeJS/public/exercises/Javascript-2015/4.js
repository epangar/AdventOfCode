/* 'use strict'; */
const getFilePaths = require('../../utils/getFilePaths');
const fillInput = require('../../utils/fillInput');
const md5 = require('md5');


class Solution4 {
    constructor(){
        //this.filePathExample = getFilePaths(4).filePathExample;
        this.filePath1 = getFilePaths(4,__dirname).filePath1;
        /* this.inputExample = fillInput(this.filePathExample, this, 'inputExample')
        .then(() => {
            this.example1 = this.calculateFirst(this.inputExample, '00000');
            this.example2 = this.calculateSecond(this.inputExample, '000000');
        }); */
        
        this.input = fillInput(this.filePath1, this, 'input')
        .then(() => {
            this.part1 = this.calculateFirst(this.input, '00000');
            this.part2 = this.calculateSecond(this.input, '000000');
        });

    }

    calculateFirst(input, zeroes){
        let counter = 1;
        
        while (counter++) {		
            
            let hash = md5(input + counter);
            
            if(hash.slice(0, zeroes.length) === zeroes){
                
                return counter
            }
        }
    }

    calculateSecond(inputString, numberOfZeroes){
        return this.calculateFirst(inputString, numberOfZeroes);
    }
}

module.exports = Solution4