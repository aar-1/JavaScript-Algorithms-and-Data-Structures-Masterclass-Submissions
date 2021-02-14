/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Initialize number index map
    let numIndexMap = {};
    // Sets number present in map along with index list
    for(let i = 0; i < nums.length; i++) {
            let currentNum = nums[i];
            numIndexMap[currentNum] = (!!numIndexMap[currentNum]) ? [...numIndexMap[currentNum], i] : [i];
    }
    console.log(numIndexMap);
   for(let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let numToFindForTarget = target - currentNum;
        if (!!numIndexMap[numToFindForTarget]) {
	    console.log(i, ' ', numIndexMap[numToFindForTarget][0]);
            let indexFoundList = (currentNum === numToFindForTarget) ? numIndexMap[numToFindForTarget].slice(0,2)
            : [i, numIndexMap[numToFindForTarget][0]];
	    if(indexFoundList.length === 2) {
		return indexFoundList;
	    }
           
        }
    }
    return [];
    
};

console.log(twoSum([3,2,4], 6));