function convertHTML(str) {
  let testStr = str.split("")
  let newArr = []
  let htmlSymbolDictionary = {
    "&": "&amp;",
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
    "'": "&apos;"
  }
  for(let i = 0; i < testStr.length; i++){
    if(htmlSymbolDictionary.hasOwnProperty(testStr[i])){
      newArr.push(htmlSymbolDictionary[testStr[i]])
    } else{
      newArr.push(testStr[i])
    }
  }

  return newArr.join("");
  }
  
  console.log(convertHTML('Stuff in "quotation marks"'));