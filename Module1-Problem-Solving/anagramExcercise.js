function validAnagram(arr1, arr2) {
// console.log('arr1::', arr1);
// console.log('arr2::', arr2);
// do validation checks
	if ((typeof(arr1) === typeof(arr2) !== 'string') && (arr1.length !== arr2.length)) {
		// console.log('Length unequal!')
		return false;
	}
// Init letter count key-value store objects
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	
	for(let char of arr1) {
		char = char.toLowerCase();
// add to its key-val store if not done
		frequencyCounter1[char] = frequencyCounter1[char] + 1 || 1;
	}

	for(let char of arr2) {
		char = char.toLowerCase();
// add to its key-val store if not done
		frequencyCounter2[char] = frequencyCounter2[char] + 1 || 1;
	}
	// console.log(frequencyCounter1);
	// console.log(frequencyCounter2);

	for(let char in frequencyCounter1) {
		if (!frequencyCounter2[char]) {
			// console.log('Letter not same');
			return false;
		}
		if(frequencyCounter2[char] !== frequencyCounter1[char]) {
			// console.log('Letter-count not same');
			return false;
		}
	}
 	return true;
}

const arr1 = 'texttwisttime';
const arr2 = 'texttimetwist';
console.log(validAnagram(arr1, arr2))