function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  let numStr1 = (num1 + ''), numStr2 = (num2 + '');
  if (numStr1.length !== numStr2.length) {
      return false;
  }
      let numStr1Map = {}, numStr2Map = {};
      for(let i = 0; i < numStr1.length; i++) {
          const currentStr1Digit = numStr1[i];
          const currentStr2Digit = numStr2[i];
          numStr1Map[currentStr1Digit] =  numStr1Map[currentStr1Digit] + 1 || 1;
          numStr2Map[currentStr2Digit] =  numStr2Map[currentStr2Digit] + 1 || 1;
      }
      
      for(let str1Digit in numStr1Map) {
          if(numStr2Map[str1Digit] !== numStr1Map[str1Digit]){
              return false;
          }
      }

  return true;
}
