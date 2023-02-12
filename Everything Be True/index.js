function truthCheck(collection, pre) {
  let resultArr = new Array();
  for (let i = 0; i < collection.length; i++) {
    resultArr.push(collection[i][pre]);
  }

  const truthyValues = resultArr.filter((val) => val);
  return resultArr.length == truthyValues.length;
}

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
    ],
    "number"
  )
);
