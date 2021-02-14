// Understand the problem - given a string give length of longest possible substring having unique characters
// O(n) TC -> means in multiple passes of constant times length of given str
// STart with 1st char in str using a ptr - store it in a map with key as char and val as index, go to next - if its not in map, add and proceed by using a 2nd ptr - increment length traversed in a var
// If current char exists then move start ptr to next index to the place where the char was matching. Store count of this str in a max var for comparison
// Clear map and start again
// If new substr len > max replace & continue till either the start or end ptr reaches eol of str.


function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
	if(str.length === 0) {
		return 0;
	} else {
		let maxSubStrLength = 0, charMap = {}, i = 0, j = 0, currentCount = 0;
		while(i <= str.length && j <= str.length) {
			console.log('i:: ', i);
			console.log('j:: ', j);
			console.log('charMap::', charMap);
			console.log('currentCount::', currentCount);
			console.log('str[j]:: ', str[j]);
			if(charMap[str[j]] === undefined && str[j] !== undefined) {
				console.log('char unique');
				charMap[str[j]] = j;
				currentCount++;
				j++;
			} else {
				console.log('maxSubStrLength Bef::', maxSubStrLength);
				 if(maxSubStrLength < currentCount) {
					console.log('is less');
					maxSubStrLength = currentCount
				}
				console.log('maxSubStrLength Af::', maxSubStrLength);
				// Reset map
				charMap = {};
				// Slide the window's start
				 i++;
				// Reset window
				 j = i;
				// Reset current count
				 currentCount = 0;
				 
			}
			
		}
		return maxSubStrLength;
	}
}

console.log(findLongestSubstring('longestsubstring'));