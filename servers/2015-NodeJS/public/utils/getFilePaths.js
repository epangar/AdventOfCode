const path = require('path');

module.exports = function(year, numberOfDay){
    return {
        filePathExample : path.join(process.cwd(), `/public/inputs/${year}/${numberOfDay}.example.txt`),
        filePath1 : path.join(process.cwd(), `/public/inputs/${year}/${numberOfDay}.txt`)
    }
}