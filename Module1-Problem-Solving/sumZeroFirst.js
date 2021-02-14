function sumZero(arrNum) {
	if(!(arrNum.constructor.name === 'Array') || arrNum.length < 2)
	{
		console.log('From invalid arg');
		return undefined;
	}
	// Init reference pointers to start & end of array
	
	let ptr1 = 0;
	let ptr2 = arrNum.length - 1;
	let midElement = Math.floor(arrNum.length / 2);
	
	// do something
	do {
		console.log('ptr1::', ptr1, 'ptr2::', ptr2, 'midElement::', midElement);
		console.log('arrNum[ptr1]::', arrNum[ptr1], 'arrNum[ptr2]::', arrNum[ptr2]);
		let sumCurrentPair = arrNum[ptr1] + arrNum[ptr2];
		if (sumCurrentPair === 0) {
			return [arrNum[ptr1], arrNum[ptr2]];
		} else if (sumCurrentPair < 0) {
			ptr1 = ptr1 + 1;
		} else {
			ptr2 = ptr2 - 1;
		}
	} while(ptr1 <= midElement && ptr2 >= midElement && ptr1 !== ptr2);
	console.log('From final stmt');
	return undefined;

}

const arr1 = [-3, -2, -1, 0, 1 ,2,3];
// const invalidArg = 1;
console.log(sumZero(arr1));
// console.log(sumZero(invalidArg));