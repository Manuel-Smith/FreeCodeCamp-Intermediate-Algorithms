function steamrollArray(arr){
    let resultArray = new Array;
    let arrLength = arr.length;


    for(let i = 0; i < arrLength; i++){
        if(Array.isArray(arr[i])){
            resultArray = resultArray.concat(steamrollArray(arr[i]));
        } else {
            resultArray.push(arr[i])
        }
    }
    return resultArray;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]))