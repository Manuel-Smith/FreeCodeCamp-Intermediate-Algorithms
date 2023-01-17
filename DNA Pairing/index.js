function pairElement(str) {
    let resultArr = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] === "A"){
            resultArr.push([str[i], "T"])
        } else if(str[i] === "T"){
            resultArr.push([str[i], "A"])
        } else if(str[i] === "G"){
            resultArr.push([str[i], "C"])
        } else if(str[i] === "C"){
            resultArr.push([str[i], "G"])
        }
    }
    return resultArr;
  }
  
  console.log(pairElement("ATCGA"));