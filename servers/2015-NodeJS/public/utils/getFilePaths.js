const path = require('path');

module.exports = function(numberOfDay){
    return {
        filePathExample : path.join(process.cwd(), `/public/inputs/${numberOfDay}.example.txt`),
        filePath1 : path.join(process.cwd(), `/public/inputs/${numberOfDay}.txt`)
    }
}