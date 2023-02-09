function smallestCommons(arr) {
  let minArr = Math.min(...arr);
  let maxArr = Math.max(...arr);

  let elementsArr = [];
  let elementsArrLength = maxArr - minArr + 1;
  let possibleMultiples = [];

  for(let i = 0; i < elementsArrLength; i++){
    elementsArr.push(minArr + i);
  }

  let limitedFactorial = 1;

  for(let i = 0; i < elementsArrLength; i++){
    limitedFactorial *= elementsArr[i];
  }

  function divisibilityTest(num){
    for(let i = 0; i < elementsArrLength; i++){
      if(num % elementsArr[i] != 0){
        return false;
      }
    }
    return true;
  }

  for(let i = minArr; i <= limitedFactorial; i++){
    if(divisibilityTest(i)){
      possibleMultiples.push(i);
      break;
    }
  }

  return possibleMultiples[0];
}

console.log(smallestCommons([23,18]));