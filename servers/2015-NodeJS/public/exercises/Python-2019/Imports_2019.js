const ChildProcess = require('child_process');
const path = require('path')

console.log("INSIDE IMPORTS2019")
const Imports_2019  = {};

for(let i = 1; i <=3; i++){
    const fileName = `./day_${i}.py`

    const pythonScriptPath = path.resolve(__dirname, fileName);
    console.log(pythonScriptPath)
    const python = ChildProcess.spawn('/usr/bin/python3', 
    [pythonScriptPath],
    {stdio: "pipe"})

    if(python){
        console.log("YES , ", i)
    } else {
        console.log("No ,", i)
    }

    python.stdout.on('data', (data) =>{
        console.log("Inside python.stdout")
        const dataSTR = data.toString()
        console.log("dataSTR = ", data.toString())
        const dataJSON = JSON.stringify(dataSTR)
        console.log("dataJSON = ", dataJSON)
        Imports_2019[i] = dataJSON
        
    })
    
    python.on('close', (code) => {
        console.log("Inside python.on-close, code = ", code)
        if (code !== 0) {
            const msg = `Failed with code = ${code}`;
            console.log(new Error(msg))
            return new Error(msg);
        }
    
        console.log("Imports_2019 = ", Imports_2019)
        console.log("Closing Imports_2019.js") 
    
        module.exports = Imports_2019
    });
}