function searchVal(arr, val) {
	let start = 0, end = arr.length - 1;
	let mid = Math.floor(arr.length/2);
	console.log('mid at start::', mid);
	console.log('start:: ', start, ' end:: ', end);
	console.log('val:: ', val);
 
	while(start <= end) {
		console.log('arr[mid]:: ', arr[mid]);
		if (val > arr[mid]) {
			start = mid + 1;
		} else if (val < arr[mid]) {
			end = mid - 1;
		} else {
			return mid;
		}
		console.log('NEXT start:: ', start, ' NEXT end:: ', end);
		// mid = Math.floor((end + start)/2);
		mid = Math.floor( ( (end - start)/2) + start);
		console.log('NEXT mid:: ', mid);
		
	}
	return -1;
}

const arr1 = [1,2,3,67,89,99,100,200,204, 309];
console.log(searchVal(arr1, 100));