const getFilePaths = require('../../utils/getFilePaths');
const fillInput = require('../../utils/fillInput');

class Solution3 {
    constructor(){
        //this.filePathExample = getFilePaths(3).filePathExample;
        this.filePath1 = getFilePaths(3, __dirname).filePath1;
        this.directions = {
            "^":[1,0],
            "v":[-1,0],
            ">":[0,1],
            "<":[0,-1]
        }
        

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

        let currentPosition = [0,0], 
            visited = {
                "0,0": 1
            };
        
        
        for(let i = 0; i < input.length ; i++){
            let direction = input[i],
                change = this.directions[direction];
            
            currentPosition[0] += +change[0]
            currentPosition[1] += +change[1]
            
            const key = currentPosition.toString();
            
            if(visited[key]){
                visited[key]++
            } else {
                visited[key] =1
            }

        }
        return Object.values(visited).length
    }

    calculateSecond(input){

        let travellers = {
            "Santa": {
                visited : {
                    "0,0": 1
                }, 
                current : [0,0]
            },
            "Robot": {
                visited : {
                    "0,0": 1
                },
                current : [0,0]
            }
        };

        for(let i = 0; i < input.length; i++){
            let currentDirection = input[i],
                change = this.directions[currentDirection], 
                traveller = (i % 2 === 0 ? 'Santa' : 'Robot');

            travellers[traveller]['current'][0] += change[0];
            travellers[traveller]['current'][1] += change[1];

            const key = travellers[traveller]['current'].toString();

            if(travellers[traveller]['visited'][key]){
                travellers[traveller]['visited'][key]++
            } else {
                travellers[traveller]['visited'][key] = 1
            }
            
        }

        let answer = Object.keys(travellers).map(traveller =>{
            return Object.keys(travellers[traveller]['visited'])
        })

        answer = answer[0].concat(answer[1]);
        answer = answer.filter((prop, position)=> {
               return answer.indexOf(prop) === position
            });
        return answer.length;
    }
}

module.exports = Solution3