function maxSubarraySum(arr, num) {
	if (num > arr.length) {
		return null;
	}
	var max = -Infinity;
	for (let i = 0; i < arr.length - num + 1; i++) {
		let temp = 0;
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		if (temp > max) {
			max = temp;
		}
		console.log(temp,max);

	}
	return max;
}

const arr1 = [1,2,5,2,8,1,5,2];
// console.log(maxSubarraySum(arr1, 2));
console.log(maxSubarraySum(arr1, 3));
// console.log(maxSubarraySum([], 2));
// console.log(maxSubarraySum([])); --> Still this is a valid use case in JS & currently its returning -Infinity