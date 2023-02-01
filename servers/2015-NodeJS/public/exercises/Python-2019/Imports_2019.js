const { spawn } = require('child_process');


const Imports_2019  = {}

for(let i = 1; i <= 25;i++){
    const py_file = `day_${i}`
    const current_py = spawn('python', [py_file])
    const new_key = `day${i}`
    Imports_2019[new_key] = current_py
}
/* 
console.log("Imports_2019 = ", Object.keys(Imports_2019))
console.log("zzzzzzzzzzzzzzzzzzzzzz") */

module.exports = Imports_2019