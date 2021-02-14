// SLiding window of sum instead of pointer var
function maxSubarraySum(arr, num) {
	if(num > arr.length) {
		return null;
	}
	let maxSum = 0;
	for(let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	let tempSum = maxSum;
	for(let i = num; i < arr.length; i++) {
		tempSum = (tempSum - arr[i - num]) + arr[i];
		if (maxSum < tempSum) {
			maxSum = tempSum;
		}
	}
	return maxSum;
	
}

const arr1 = [1,2,5,2,8,1,5,2];
console.log(maxSubarraySum(arr1, 2));
console.log(maxSubarraySum(arr1, 4));
