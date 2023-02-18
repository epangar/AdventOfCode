const getFilePaths = require('../../utils/getFilePaths');
const fillInput = require('../../utils/fillInput');

class Light{
    constructor(){
        this.lit = false;
    }

    toggle(){
        this.lit = !this.lit;
    }

    turnOff(){
        if(this.lit === true){
            this.lit = false;
        } else {
            return;
        }       
    }

    turnOn(){
        if(!this.lit){
            this.lit = true;
        } else {
            return;
        }
    }
}

class SecondLight {
    constructor(){
        this.brightness = 0;
    }

    toggle(){
        this.brightness += 2;
    }

    turnOff(){
        if(this.brightness >0){
            this.brightness--
        } else {
            return;
        }     
    }

    turnOn(){
        this.brightness++
    }
}

class Solution6 {
    constructor(){
        this.filePathExample = getFilePaths(6,__dirname).filePathExample;
        this.filePath1 = getFilePaths(6,__dirname).filePath1;
        
        this.dummyGrid = this.makeGrid(5,5,1);
        
        this.inputExample = fillInput(this.filePathExample, this, 'inputExample')
        .then(() => {
            this.inputExample = this.parseInput(this.inputExample);
            const GRID = this.makeGrid(5, 5,1)
            this.example1 =  this.calculateFirst(GRID, this.inputExample);
        });
        
        
       this.input = fillInput(this.filePath1, this, 'input')
        .then(() => {
            this.input = this.parseInput(this.input);
            this.GRID = this.makeGrid(1000, 1000, 1);
            this.part1 = this.calculateFirst(this.GRID, this.input);
            this.GRID2 = this.makeGrid(1000, 1000, 2)
            this.part2 = this.calculateSecond(this.GRID2,this.input); 
        });
    }

    parseInput(str){
        return str.split('\n').map(st =>{
            let myMethod, 
                splitSt = st.split('through'),
                myStart = splitSt[0].split(' ').filter(s => s.includes(','))[0].split(',').map(s=> parseInt(s))/*.split(' ')[1] */,  
                myEnd = splitSt[1].split(',').map(s=> parseInt(s));

                [myStart, myEnd].map(e => e.map(s=> parseInt(s)));

            if(st.includes('toggle')){
                myMethod = 'toggle'
            } else {
                myMethod = st.includes('off') ? 'turn off' : 'turn on';
            }

            return {
                method: myMethod,
                start: myStart,
                end:myEnd
            }
        })
    }

    makeGrid(vertical, horizontal, exercise){
        const grid = [];
        for (let i = 0; i < vertical; i++) {
          const row = [];
          for (let j = 0; j < horizontal; j++) {
            if(exercise === 1){
                row.push(new Light());
            } else if(exercise === 2){
                row.push(new SecondLight());
            }
          }
          grid.push(row);
        }
        return grid;
    }

    calculateFirst(grid, instructions){
        instructions.forEach((instruction) => {

            let startH = instruction.start[1], 
                startV = instruction.start[0], 
                endH = instruction.end[1],
                endV = instruction.end[0],
                method = instruction.method;

            for(let i = startH; i <= endH; i++){
                for(let j = startV; j <= endV; j++){
                    if(method === 'toggle'){
                        grid[i][j].toggle();
                    } else if (method === 'turn off'){
                        grid[i][j].turnOff();
                    } else {
                        grid[i][j].turnOn();
                    } 
                }
            }
        })

        
        const ANSWER = grid.map(row => row.filter(light => light.lit).length)
        
        return ANSWER.reduce((a,b)=>a+b)
    }

    calculateSecond(grid, instructions){
        instructions.forEach((instruction) => {

            let startH = instruction.start[1], 
                startV = instruction.start[0], 
                endH = instruction.end[1],
                endV = instruction.end[0],
                method = instruction.method;

            for(let i = startH; i <= endH; i++){
                for(let j = startV; j <= endV; j++){
                    if(method === 'toggle'){
                        grid[i][j].toggle();
                    } else if (method === 'turn off'){
                        grid[i][j].turnOff();
                    } else {
                        grid[i][j].turnOn();
                    } 
                }
            }
        })
        return grid.reduce((acc, row) => {
            const rowBrightness = row.reduce((rowAcc, light) => rowAcc + light.brightness, 0);
            return acc + rowBrightness;
          }, 0)
    }
}

module.exports = Solution6