function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const PI = Math.PI;

  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let craftName = arr[i].name;
    let avgAlt = arr[i].avgAlt;
    let radius = earthRadius + avgAlt;

    let periodT = Math.round(2 * PI * Math.sqrt(radius ** 3 / GM));

    resultArr.push({ name: craftName, orbitalPeriod: periodT });
  }

  return resultArr;
}

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);
