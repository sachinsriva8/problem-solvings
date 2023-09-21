/**
 *
 * @param {String} s
 * @step1 create a function to take input from user
 * @step2 create an empty array subArray to store all substring of s
 * @step3 run a for loop from i=0 till i< str.length and create a variable str='';
 * @step4 run a nested loop from j=i till j< s.length
 * @step5 concatenate all rest of elements and push the str in subArray.
 * @step6 create a function to to check whwteher string is palindrom or not and check for each element in subArray and calculate the maximum length.
 */
const longestPalindromicSustring = (s) => {
  let subArray = [];
  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let j = i; j < s.length; j++) {
      str += s[j];
      subArray.push(str);
    }
  }
  //   console.log(subArray);

  let palindromicSubstring = subArray.filter((item) => {
    let flag = true;
    let j = item.length - 1;
    for (let i = 0; i < item.length / 2; i++) {
      if (item[i] !== item[j]) {
        flag = false;
        break;
      }
      j--;
    }
    return flag;
  });
  //   console.log(palindromicSubstring);
  let max = -Infinity;
  let maxSubstr = "";
  for (let i of palindromicSubstring) {
    if (i.length >= max) {
      max = i.length;
      maxSubstr = i;
    }
  }
  //   console.log(maxSubstr);
  return maxSubstr;
};

console.log(longestPalindromicSustring("babacd"));
console.log(longestPalindromicSustring("cbbd"));
