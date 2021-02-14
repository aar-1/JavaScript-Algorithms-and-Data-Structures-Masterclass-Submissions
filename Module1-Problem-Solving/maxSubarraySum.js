/** Understand the problem - in an array - given a window len <= array len, 
in that window of consecutive indices of array - find the max sum possible for the subsets
of numbers in that array
**/
function maxSubarraySum(arr, rangeSize){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length < rangeSize || rangeSize <= 1) {
	return null;
  } else {
	let maxSum = -Infinity;
	for(let i = 0; i <= arr.length - rangeSize; i++) {
		let currentSum = 0;
		for(let j = 0; j < rangeSize; j++) {
			currentSum += arr[i + j];
		}
		if(currentSum > maxSum) {
			maxSum = currentSum;
		}
	}
	return maxSum;
  }

	
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));