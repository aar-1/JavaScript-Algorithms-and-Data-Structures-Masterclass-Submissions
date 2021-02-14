function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let countNumMap = {};
  for(let i=0; i < arguments.length; i++) {
      const currentNum = arguments[i];
      if(!countNumMap[currentNum]) {
          countNumMap[currentNum] = 1;
      } else {
          return true;
      }
  }
  return  false;
}

console.log(areThereDuplicates('a','b','c','a'));

console.log(areThereDuplicates(1,21,34,21,89,0,8));

console.log(areThereDuplicates());
console.log(areThereDuplicates('a', 'A', 67));