
/**
 * 
 * @param {Array} nums 
 * @param {Number} k 
 * @step1 create a function to take input from user.
 * @step2 create two empty array to store positive and negative value of input array.
 * @step3 run a for of loop on input array and check if value is present at element's index
 *        if yes then increase the value by 1, if not initialize value 1. This step to be performed
 *        for both if elemment in input array is positive or negative. count the number of postive integer.
 * @step4 Store key value pair as an array for both positive and negatve numbers using Object.entries().
 * @step5 check if k>count, if yes then our value lies in negative array. update value of
 *        k by substracting count from it and run a for of loop on negative array and return the -value when k becomes 1 or 0. 
 * @step6 if k<=len then our value lies in positive array. run foor loop on positive array from back and return value if k=0 or 1.
 */
var findKthLargest = function(nums, k) {
    let pos=[];
    let neg=[];
    let count=0;
    for(let i of nums){
        if(i>=0){
            if(pos[i]!==undefined){
                pos[i]+=1;
                count++;
            }else{
                pos[i]=1;
                count++;
            }
        }else{
            i=-i;
            if(neg[i]!==undefined){
                neg[i]+=1;
            }else{
                neg[i]=1;
            }
        }
    }
    let val=Object.entries(pos);
    let val_neg=Object.entries(neg);
    if(k>count){
        k=k-count;
        for(let i of val_neg){
            if(k>1){
                k-=i[1];
            }else if(k==1){
                return -i[0];
            }
            if(k<=0){
                return -i[0];
            }
        }
    }else{
        for(let i of val.reverse()){
            if(k>1){
                k-=i[1];
            }else if(k==1){
                return i[0];
            }
            if(k<=0){
                return i[0];
            }
        }
    }
};


