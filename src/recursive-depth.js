const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    
    calculateDepth(arr, depthArr = [], tmpCount = 1) {

        depthArr.push(tmpCount);
        for (var i = 0; i < arr.length; i++) {
            if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
                this.calculateDepth(arr[i], depthArr, tmpCount + 1);
            }
        }
        return Math.max(...depthArr);
    }
};