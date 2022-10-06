const fs = require('fs');

module.exports = function(filePath){
    
    return new Promise((resolve, reject)=>{
        
        return fs.readFile(filePath, 'utf-8', (error, content) => {
            if (error) {
                throw error
            } 
            return resolve(content);
            
        })
    })
}