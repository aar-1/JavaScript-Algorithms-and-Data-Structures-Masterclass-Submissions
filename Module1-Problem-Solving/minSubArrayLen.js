function minSubArrayLen(arr, target) {

	if(arr.length === 0) {
		return 0;
	} else {
		let windowSize = 1, isFound = false;
		while(windowSize <= arr.length) {
			console.log('windowSize::', windowSize);
			// Try to go over each sub array of windowSize & try to find a match, if found turn isFound flag = true
			for(let i = 0; i <= arr.length - windowSize; i++) {
				console.log('i:: ', i);
				let currentSubArrSum = 0;
				for(let j = 0; j < windowSize; j++) {
					currentSubArrSum += arr[i + j];
				}
				console.log('currentSubArrSum:: ', currentSubArrSum);
				isFound = currentSubArrSum >= target;
				if(isFound) {
					return windowSize;
		 		}
			}
		  console.log('isFound:: ', isFound);
		  
			windowSize ++;
		}
	return 0;
		
	}
}

console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));