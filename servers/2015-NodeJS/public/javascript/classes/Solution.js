const Solution1 = require('./1');
const Solution2 = require('./2');

class Solution {
    constructor(){
        this.day1 = new Solution1();
        this.day2 = new Solution2();
    }
}

module.exports = Solution