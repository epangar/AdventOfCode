const path = require('path');
const yearLanguage = require('../utils/year-language');

module.exports = function(numberOfDay, directory){

    return {
        filePathExample : path.join(directory, `inputs/${numberOfDay}.example.txt`),
        filePath1 : path.join(directory, `inputs/${numberOfDay}.txt`)
    }
}