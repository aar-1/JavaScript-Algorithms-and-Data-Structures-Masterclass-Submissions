// Step 1 - Understand problem - find if all chars in a string are in same order in the second.
// Step 2 Examples
// ex1 sing, sting ---> TRUE
// ex2 abc, acb --> FALSE
// ex3 abc, abracadabra
// Step 3 - Break it down
// Put a pointer in 1st string 1st char and second ptr at 2nd string 1st char, also another ptr at 2nd string 1st char
// Next check each char on 1st string's ptr if its matching with 2nd string's 1st ptr then increment the 2nd ptr to 1str ptr + 1
// Then increment 1st string's ptr , then check current value with 2nd string's 2nd ptr
// If it doesn't match at any point reset all pointers but for 2nd start at 1st match of 1st string's char
// Continue till length of string till match found

function isSubsequence(matchString, baseString) {
  // good luck. Add any arguments you deem necessary.
  if(matchString.length === 0 && baseString.length === 0) {
	console.log('Both empty');
	return true;
  }
  if(baseString.length < matchString.length) {
	console.log('Base string is shorter than match string, cant contain it');
	return false;
  }
  let matchStrPtr = 0, baseStrStartPtr = 0, baseStrEndPtr = 0;
  while(matchStrPtr < matchString.length && baseStrEndPtr < baseString.length &&  baseStrStartPtr < baseString.length) {
	if(matchString[matchStrPtr] === baseString[baseStrEndPtr]) {
		console.log('isEqual');
		console.log('matchStrPtr:: ', matchStrPtr);
		console.log('baseStrEndPtr:: ', baseStrEndPtr);
		matchStrPtr++;
		baseStrEndPtr++;
	} else {
		console.log('is NOT Equal');
		if(baseStrEndPtr === baseString.length - 1 && matchStrPtr > 0) {
			// Reset condition
			console.log('Reached END, so reset');
			baseStrStartPtr++;
			baseStrEndPtr = baseStrStartPtr;
			matchStrPtr = 0;
		} else {
			// Continue as usual
			console.log('Continue as usual');
			baseStrEndPtr++;
		}
	}
  }
console.log('Final slice val:: ', baseString.slice(baseStrStartPtr, baseStrEndPtr));

return matchStrPtr === matchString.length;
  
}

console.log('Answer for sing-sting');
console.log(isSubsequence('sing', 'sting'));

console.log('Answer for abc-acb');
console.log(isSubsequence('abc', 'acb'));

console.log('Answer for hello - hello world');
console.log(isSubsequence('hello', 'hello world'));

console.log('Answer for abc - abracadabra');
console.log(isSubsequence('abc', 'abracadabra'));
