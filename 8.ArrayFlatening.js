
/**
 * @step1 create a function and take input from user
 * @step2 use recuurion to flatned the array. 
 * @step3 terminatin coditon recurssion would be if input array is not array then return input value as it is.
 * @step4 now run for of loop on arr and check if elemt is not array then push the value in output array else call the function on elemnet again and spread the result.
 * @step5 return out.
 */

const arrayFlatening=(arr)=>{
    let out=[];
    if(!Array.isArray(arr)){
        return arr;
    }
    for(let i of arr){
        if(Array.isArray(i)){
            out.push(...nestedArray(i));
        }else{
            out.push(i);
        }
    }
    return out;
}

let arr = [
    [1, 2, [10, 11, 12, 13, 14, 15, [10, 11, 12, 13, 14, 15]]],
    [3, 4],
    [5, 6, 7, 8, 9, [5, 6, 7, 8, 9, [5, 6, 7, 8, 9]]],
    [10, 11, 12, 13, 14, 15],
  ];
console.log(nestedArray(arr));
console.log(nestedArray([[1,2,3,[4,5,[6,[7,[8,[9,[[[[10]]]]]]]]]]]));