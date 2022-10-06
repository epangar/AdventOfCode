const readInputFile = require( '../utils/readInputFile');
const path = require('path');
const filePath = path.join(process.cwd(), '/public/inputs/1.example.txt');
console.log("PATH = ", filePath)



class Solution1 {
    constructor(){
        this.input;
        this.part1 =  this.calculateFirst();
        this.part2 = 123 || this.calculateSecond();
    }

    calculateFirst(){
/* 
        this.file.readFile('../../inputs/1.example.txt', 'utf-8', (err, data) => {
            console.log("Clase 1, ", data)
        }) */
        console.log("Inside calculate first")
        /* let answer = readInputFile(filePath).answer;
        console.log("\nInside calculate first, answer = ", answer)
        return answer; */
    }

    calculateSecond(){

    }
}

module.exports = Solution1