function getLengthofSubstring(s) {
  let n = s.length;
  let maxLen = 0;
  let charIndexMap = new Map();
  let leftIndex = 0;

  for (let rightIndex = 0; rightIndex < n; rightIndex++) {
    currentChar = s[rightIndex];
    if (charIndexMap.has(currentChar)) {
      leftIndex = Math.max(leftIndex, charIndexMap.get(currentChar) + 1);
    }
    // console.log(charIndexMap);
   
    charIndexMap.set(s[rightIndex], rightIndex);
    maxLen = Math.max(maxLen, rightIndex - leftIndex + 1);
  }
  return maxLen;
}

console.log('max length os substring is '+getLengthofSubstring("pwwkjlebmht"));
