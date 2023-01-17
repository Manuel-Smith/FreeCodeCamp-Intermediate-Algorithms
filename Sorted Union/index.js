function uniteUnique(arr) {
    let allArgs = [...arguments]
    let allArrElements = []
    let resolvedArr = []
    for(let i = 0; i < allArgs.length; i++){
        allArrElements.push(...allArgs[i])
    }

    for(let i = 0; i < allArrElements.length; i++){
        if(resolvedArr.indexOf(allArrElements[i]) == -1){
            resolvedArr.push(allArrElements[i])
        }
    }
  return resolvedArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
