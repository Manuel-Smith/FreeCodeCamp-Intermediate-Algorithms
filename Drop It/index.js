function dropElements(arr, func){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            newArr.push(...arr.slice(i));
            break;
        }
    }
    return newArr;
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));