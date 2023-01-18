function sumFibs(num) {
  let newArr = [];
  let oddCount = 0;
  for(let i = 0; i <= num; i++){
    if(i == 1 || i == 2){
      newArr.push(1)
    }
    else if(i > 2){
      newArr.push(newArr[newArr.length - 1]+newArr[newArr.length - 2])
    }
  }

  for(let i = 0; i < newArr.length; i++){
    if(newArr[i]%2 == 1 && newArr[i] <= num){
      oddCount +=newArr[i];
    }
  }
  return oddCount;
}

console.log(sumFibs(75025))
