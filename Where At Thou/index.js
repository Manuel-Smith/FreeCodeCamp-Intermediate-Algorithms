/**
 *Hints
Hint 1
You may use for loop or the Array.prototype.filter method.

Hint 2
Try to use the Object.prototype.hasOwnProperty method to know if the property name exists in an object (as its own property).

Hint 3
Check equivalence of Object in collection with Object passed as second parameter to whatIsInAName function.
 */

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter((obj) => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (
        obj.hasOwnProperty(souceKeys[i]) === -1 ||
        obj[souceKeys[i]] !== source[souceKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

let result = whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

console.log(result);
