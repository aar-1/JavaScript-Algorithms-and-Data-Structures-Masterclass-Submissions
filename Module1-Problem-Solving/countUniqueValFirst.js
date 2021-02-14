function countUniqueValues(arr1) {
	let countOfUniqueIntegers = 0;
	// const falsyValList = [undefined, null, NaN, ''];
	// Assuming only integers stored & no falsy vals like abover nor non integer val stored.
	// Given list is sorted
	if(arr1.length > 1) {
		// Init Pointer variables
		let currentValPtr = 0, nextValPtr = currentValPtr + 1;
		countOfUniqueIntegers = 1;
		while(nextValPtr < arr1.length) {
			if(arr1[currentValPtr] !== arr1[nextValPtr]) {
				countOfUniqueIntegers++;
			}
			currentValPtr++;
			nextValPtr = currentValPtr + 1;
		}
	} 
	return countOfUniqueIntegers;

}

const arr1 = [];
console.log(countUniqueValues(arr1))