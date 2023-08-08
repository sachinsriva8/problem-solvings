

/**
 * 
 * @param {Array} arr
 * @step1 creata a function to get input from user.
 * @step2 create a variable i=0 , j=1;
 * @step3 run a while loop till j< arr.length.
 * @step4 check if value at position i is 0, if yes then check if value at i and j are different,
 *        if yes than swap values and increment i by 1 and make j=i+1 , if no than fix position of i and oly increase j.
 * @step5 return arr.
 */
let swappingZeroAtEnd=(arr)=>{
    let i=0;
    let j=1;
    let temp=0;
    while(j<arr.length){
        if(arr[i]==0){
            if(arr[i]!==arr[j]){
                temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
                // console.log(arr, i,j);
                i++;
                j=i+1;
            }else{
                j++;
            }
        }else{
            i++;
            j++;
        }
    }
    // console.log("final",arr);
    return arr;
}
console.log(swappingZeroAtEnd([1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0]));
