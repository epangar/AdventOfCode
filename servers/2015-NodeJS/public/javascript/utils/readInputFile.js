const fs = require('fs');

module.exports = function (filePath){
    
    fs.readFile(filePath, 'utf-8', (error, content) => {
        if (error) {
            throw error
        };
        
        console.log("Inside readInputFile, content = ", content)
        this.answer = content;
        process.stdout.write(content);
        console.log("Inside readInputFile, answer = ", answer)
        //return answer;
    });
    
}