function countUniqueValues(arr) {
// Handles empty list - short circuit for that
	if(arr.length === 0) return 0;
	var i = 0;
// Loops through the entire list
	for(var j = 0; j < arr.length; j++) {
		if(arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

const arr1 = [1,1,2,2,2,3,3,3,3,4,5];
console.log(countUniqueValues(arr1));
console.log(countUniqueValues([]));