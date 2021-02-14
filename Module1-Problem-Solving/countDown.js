function countDown(num) {
	if (num <= 0) {
		console.log('All done from recursive!');
		return;
	}
	console.log(num);
	num--;
	countDown(num);
}

// Iterative version of above

function countDownIterative(num) {
	for(var i = num; i > 0; i--) {
		console.log(i);
	}
	console.log("All done from iterative!");
}


console.log('From Recursive:: ');
countDown(5);
console.log('From Iterative:: ');
countDownIterative(5);



