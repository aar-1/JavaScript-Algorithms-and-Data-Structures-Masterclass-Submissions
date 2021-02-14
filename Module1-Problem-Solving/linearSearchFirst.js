function searchVal(arr, val) {
	let found = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			// returns value of index in array where first occurrence of found value is located
			found = i;
			break;
		}
	}
	return found;
}

const arr1 = [1,2,3,7,15];
console.log(searchVal(arr1, 15));
console.log(searchVal(arr1, 1));