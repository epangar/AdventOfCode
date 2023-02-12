const ChildProcess = require('child_process');
const path = require('path')

console.log("INSIDE IMPORTS2019")
const Imports_2019  = {}, END = 3;

const Imports1019Promise = new Promise((resolve, reject)=>{
    for(let i = 1; i <=END; i++){
        const fileName = `./day_${i}.py`
        const currentDaySolutions = {}
        const pythonScriptPath = path.resolve(__dirname, fileName);
        const python = ChildProcess.spawn('python3', 
        [pythonScriptPath],
        {stdio: "pipe"})
    
        
        python.stdout.on('data', (data) =>{
            console.log("Inside python.stdout, round #",i, data.toString())
            
            const modelData = data.toString().trim().split(" ").map(s => parseInt(s))
            
            console.log("Modeldata", modelData)

            modelData.forEach((n, p) => {
                console.log("@@@@",n,p)
                const key = `part${p+1}`
                currentDaySolutions[key] = n
            });
            console.log("currentDaySolutions = ", currentDaySolutions)
            console.log("XXXXXXXXXXXXXXXXXXXXXXXX current Imports_2019 = ", Imports_2019)
            
            Imports_2019[`day${i}`] = currentDaySolutions
            console.log("Imports_2019 added = ", Imports_2019)
            
        })
        
        python.on('close', (code) => {
            console.log("Inside python.on-close, code = ", code)
            if (code !== 0) {
                const msg = `Failed with code = ${code}`;
                console.log(new Error(msg))
                reject (new Error(msg));
            }
        
            console.log(`Does i (${i}) equal END (${END})?`, i === END   )
        
            if(i === END){
                console.log("Imports_2019 = ", Imports_2019)
                console.log("Closing Imports_2019.js") 
                resolve(Imports_2019)
            }
        });
    }
})

module.exports = Imports1019Promise

