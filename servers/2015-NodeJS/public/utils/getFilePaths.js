const path = require('path');

module.exports = function(numberOfDay, directory){

    return {
        filePathExample : path.join(directory, `inputs/${numberOfDay}.example.txt`),
        filePath1 : path.join(directory, `inputs/${numberOfDay}.txt`)
    }
}