function maxSubarraySum(arr, subArrSize) {
	let maxSumOfSubArr = null;
	if(subArrSize <= arr.length) {
		for(let i = 0, j = (subArrSize - 1); j < arr.length; i++, j= i+(subArrSize - 1)) {
			// do something
			let currentSubArrSum = 0;
			for(let k = i; k <= j; k++) {
				currentSubArrSum += arr[k];
			}
			console.log('i:: ', i , ' j:: ', j , ' currentSubArrSum:: ', currentSubArrSum);
			if(maxSumOfSubArr === null) {
				maxSumOfSubArr = currentSubArrSum;
			} else if(maxSumOfSubArr < currentSubArrSum) {
				maxSumOfSubArr = currentSubArrSum;
			}
		}
	}
	return maxSumOfSubArr;
}

const arr1 = [1,2,5,2,8,1,5];
const arr2 = [4,2,1,6];
const empArr = [];
console.log(maxSubarraySum(arr1, 2));
console.log(maxSubarraySum(arr1, 4));
console.log(maxSubarraySum(empArr, 2));
console.log(maxSubarraySum(arr2, 1));
console.log(maxSubarraySum(arr2, 4));
console.log(maxSubarraySum(arr2, 40));


