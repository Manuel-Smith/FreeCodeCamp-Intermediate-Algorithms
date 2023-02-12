function addTogether(a) {
  let myArguments = [...arguments];
  let argLength = myArguments.length;

  if (argLength > 1) {
    for (let i = 0; i < argLength; i++) {
      if (typeof myArguments[i] != "number") {
        return;
      }
    }
    return myArguments.reduce((accum, initVal) => (accum += initVal), 0);
  } else if (argLength === 1 && typeof arguments[0] === "number") {
    return function (b) {
      if (typeof a && typeof b == "number") {
        return a + b;
      }
    };
  }
}

console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
