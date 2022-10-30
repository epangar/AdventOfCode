const getFilePaths = require('../utils/getFilePaths');
const fillInput = require('../utils/fillInput');

class Light{
    constructor(){
        this.lit = false;
    }

    toggle(){
        this.lit = !this.lit;
    }

    turnOff(){
        if(this.lit){
            this.lit = false;
        }        
    }

    turnOn(){
        if(!this.lit){
            this.lit = true;
        }
    }
}

class Solution6 {
    constructor(){
        this.filePathExample = getFilePaths(6).filePathExample;
        this.filePath1 = getFilePaths(6).filePath1;
        
        this.dummyGrid = this.makeGrid(5,5);
        //this.grid = this.makeGrid(1000,1000);
        
        //this.inputExample = fillInput(this.filePathExample, this, 'inputExample')
        /* .then(() => {
            //this.inputExample = this.parseInput(this.inputExample);
            //console.log("this.inputExample = ",this.inputExample)
            //const GRID = this.makeGrid(5, 5)
            //this.example1 =  this.calculateFirst(GRID, this.inputExample);
        }); */
        
        
       this.input = fillInput(this.filePath1, this, 'input')
        .then(() => {
            this.input = this.parseInput(this.input);
            const GRID = this.makeGrid(1000, 1000);
            this.part1 = this.calculateFirst(GRID, this.input);
            /* this.part2 = this.calculateSecond(this.input); */
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
        return new Array(vertical).fill(new Array(horizontal).fill().map(u => new Light()))
    }

    calculateFirst(grid, instructions){
        console.log("start grid = ", grid)
        //we must return .map() of instructions
        instructions.forEach((instruction, numberOfInstruction) => {
            const start = instruction.start, 
                end = instruction.end,
                method = instruction.method;
            
                //console.log("grid = ", grid)

            grid = grid.map((row, numberOfRow) => 
                row.map((columnLight, numberOfColumn) => {
 
                    //let currentPoint = [numberOfRow, numberOfColumn]; //This is where we are

                    let temp;

                    if(start[0] > end[0]){
                        temp = end[0];
                        end[0] = start[0]
                        start[0] = temp;
                    }

                    if(start[1] > end[1]){
                        temp = end[1];
                        end[1] = start[1]
                        start[1] = temp;
                    }
                    if(numberOfRow >= start[0]
                        && numberOfRow <= end[0]
                        && numberOfColumn >= start[1]
                        && numberOfColumn <= end[1] ){
                            console.log("inside ")
                            console.log(`current ${[numberOfRow, numberOfColumn]}, start ${start}, end ${end}`)
                            console.log(columnLight, method)
                            if(method === 'toggle'){
                                columnLight.toggle();
                            } else if (method === 'turn off'){
                                columnLight.turnOff();
                            } else {
                                columnLight.turnOn();
                            }
                            console.log(columnLight)
                        }

                    return columnLight
                })
            )
        })
        
        console.log("answer so far = ", grid.map(row => row.filter(light => light.lit === true).length))
        return grid.map(row => row.filter(light => light.lit).length).reduce((a,b)=>a+b)
    }

    calculateSecond(grid, instructions){
        
    }
}

module.exports = Solution6