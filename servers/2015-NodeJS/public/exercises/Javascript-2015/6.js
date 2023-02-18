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

class Solution6 {
    constructor(){
        this.filePathExample = getFilePaths(6,__dirname).filePathExample;
        this.filePath1 = getFilePaths(6,__dirname).filePath1;
        
        this.dummyGrid = this.makeGrid(5,5);
        //this.grid = this.makeGrid(1000,1000);
        
        this.inputExample = fillInput(this.filePathExample, this, 'inputExample')
        .then(() => {
            this.inputExample = this.parseInput(this.inputExample);
            //console.log("this.inputExample = ",this.inputExample)
            const GRID = this.makeGrid(5, 5)
            this.example1 =  this.calculateFirst(GRID, this.inputExample);
        });
        
        
       this.input = fillInput(this.filePath1, this, 'input')
        .then(() => {
            this.input = this.parseInput(this.input);
            this.GRID = this.makeGrid(1000, 1000);
            //console.log(this.input)
            //console.log(GRID)
            this.part1 = this.calculateFirst(this.GRID, this.input);
            console.log(this.part1)
            //this.part2 = this.calculateSecond(this.input); 
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

    makeGrid(vertical, horizontal){
        const grid = [];
        for (let i = 0; i < vertical; i++) {
          const row = [];
          for (let j = 0; j < horizontal; j++) {
            row.push(new Light());
          }
          grid.push(row);
        }
        return grid;
    }

    calculateFirst(grid, instructions){
        //console.log("start grid = ", grid)
        //we must return .map() of instructions
        instructions.forEach((instruction) => {

            let startH = instruction.start[1], 
                startV = instruction.start[0], 
                endH = instruction.end[1],
                endV = instruction.end[0],
                method = instruction.method;

            for(let i = startH; i <= endH; i++){
                for(let j = startV; j <= endV; j++){

                    //console.log(`Changing:\n [${i}][${j}] = ${grid[i][j].lit}`)
                    
                    if(method === 'toggle'){
                        grid[i][j].toggle();
                    } else if (method === 'turn off'){
                        grid[i][j].turnOff();
                    } else {
                        grid[i][j].turnOn();
                    } 

                    //console.log(`Changed:\n [${i}][${j}] = ${grid[i][j].lit}`)
                }
            }
        })

        
        const ANSWER = grid.map(row => row.filter(light => light.lit).length)
        
        console.log("answer so far = ", ANSWER)
        return ANSWER.reduce((a,b)=>a+b)

        

       /*  let ANSWER = grid.reduce((count, row)=>{
            return count + row.filter((l) => l.lit).length
        },0)
        return ANSWER */
    }

    calculateSecond(grid, instructions){
        
    }
}

module.exports = Solution6