/**
 * 
 * @param {string} str
 * @step1 create a function to take input from user (str)
 * @step2 break string into array of words. create a variable temp with empty string.
 * @step3 run a for loop from i=0 till i<arr.length-1 and check
 *        if length of element at i is greater than or equal to elemnt at i+1. if yes then swap their values.
 * @step4 return last elemnt of arr.
 */
let longestWord=(str)=>{
    let arr= str.split(" ");
    let temp='';
    for(let i =0; i<arr.length-1;i++){
        if (arr[i].length>=arr[i+1].length){
            temp=arr[i+1];
            arr[i+1]=arr[i];
            arr[i]=temp;
        }
    }
    return arr[arr.length-1];
}

console.log(longestWord("My name is ankit jain & i'm from morena morema"));