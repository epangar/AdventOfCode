const fs = require('fs');

module.exports = function(filePath){
    console.log("Inside readInputFile")
    
    return new Promise((resolve, reject)=>{
        
        return fs.readFile(filePath, 'utf-8', (error, content) => {
            if (error) {
                throw error
            } 
            console.log("Inside readInputFile.readFile, content = ", content)
            //process.stdout.write(content);
            return resolve(content);
            
        })
    })
}