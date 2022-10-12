const Solution1 = require('./1');
const Solution2 = require('./2');
const Solution3 = require('./3');
const Solution4 = require('./4');
const Solution5 = require('./5');

class Solution {
    constructor(){
    }

    get day1(){
        return new Solution1()
    }
    get day2(){
        return new Solution2()
    }
    get day3(){
        return new Solution3()
    }
    get day4(){
        return new Solution4()
    }
    get day5(){
        return new Solution5()
    }
}

module.exports = Solution