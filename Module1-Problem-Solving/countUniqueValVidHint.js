function countUniqueValues(arr1) {
	let countOfUniqueValues = 0;
	let i = -1, j = 0;
	if(arr1.length > 0) {
		i = 0;
		j = 1;
		while(j < arr1.length) {
			if(arr1[i] !== arr1[j]) {
				i++;
				arr1[i] = arr1[j];
			}
			j++;
		}
	}
	countOfUniqueValues = i + 1;
	return countOfUniqueValues;
}

const arr1 = [1,1,2,2,2,3,3,4,4,5,6];
const empArr = [];
const soloArr = [1];
console.log(countUniqueValues(arr1));
console.log(countUniqueValues(empArr));
console.log(countUniqueValues(soloArr));