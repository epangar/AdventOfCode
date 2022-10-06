const readInputFile = require( './readInputFile');

module.exports = function(input, toBind, prop){
    return readInputFile(input, prop)
        .then(data =>{
            let str = data.toString();
            toBind[prop] = str;
        })
}