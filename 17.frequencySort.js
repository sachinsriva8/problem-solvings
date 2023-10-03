const frequencySort = (str) => {
  const characterMap = {};
  for (let i of str) {
    if (characterMap[i]) {
      characterMap[i] += 1;
    } else {
      characterMap[i] = 1;
    }
  }
  //   console.log(characterMap);

  let characterArray = Object.entries(characterMap);
  //   console.log(characterArray);
  sortedArray = characterArray.sort((a, b) => b[1] - a[1]); // sorting in descending Order
  //   console.log(sortedArray);
  let sortedString = "";
  for (let i of sortedArray) {
    const [char, count] = i;
    // console.log(char, count);
    const temp = Array(count).fill(char).join(""); // using Array(length).fill("character").join("") to create string
    // console.log(temp, typeof temp);
    sortedString += temp;
  }
  //   console.log(sortedString);
  return sortedString;
};

console.log(frequencySort("cCaaAAbbbaBaBBaa"));
console.log(frequencySort("cCaaAAbbbBBBaaaa"));
