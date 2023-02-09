function dropElements(arr, func){
    return arr;
}

console.log(dropElements([1,2,4], function(n){return n < 3;}));