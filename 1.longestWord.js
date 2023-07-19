/**
 * 
 * @param {string} str
 * @step1 create a function to take input from user (str)
 * @step2 break string into array of words. Declare and initialize max_len to zero.
 * @step3 calculating max_length of longest word by iterating though the array.
 * @step4 now pushing the word whose length matches to above calculated max_length into new array out.
 * @step5 return the first elemnt of out array.
 */
let longestWord=(str)=>{
    let arr= str.split(" ");
    let out=[];
    let max_len=0;
    for(let i =0; i<arr.length;i++){
        if (max_len<arr[i].length){
            max_len=arr[i].length;
        }
    }
    for (let i of arr){
        if(max_len==i.length){
            out.push(i);
        }
    }
    return out[0];
}

console.log(longestWord("My name is ankit jain & i'm from morena morema"));