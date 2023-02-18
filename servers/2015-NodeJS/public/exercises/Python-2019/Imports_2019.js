const ChildProcess = require('child_process');
const path = require('path')

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
            
            console.log("Inside stdout, #", i, " , data = ", data.toString())
            const modelData = data.toString().trim().split(" ").map(s => parseInt(s))
            
            modelData.forEach((n, p) => {
                const key = `part${p+1}`
                currentDaySolutions[key] = n
            });

            console.log("MODEL DATA = ", modelData)
            
            Imports_2019[`day${i}`] = currentDaySolutions
        })

        python.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });
        
        python.on('close', (code) => {
            if (code !== 0) {
                const msg = `Failed with code = ${code}`;
                console.log(new Error(msg))
                reject (new Error(msg));
            }
        
            if(i === END){
                resolve(Imports_2019)
            }
        });
    }
})

module.exports = Imports1019Promise

