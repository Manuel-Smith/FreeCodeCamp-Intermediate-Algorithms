function convertHTML(str) {
  let newArr = []
  let htmlSymbolDictionary = {
    "&": "&amp;",
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  for(let i = 0; i < str.split(" ").length; i++){
   if(htmlSymbolDictionary.hasOwnProperty(str.split(" ")[i])){
      newArr.push(htmlSymbolDictionary[str.split(" ")[i]]);
    } else {
      newArr.push(str.split(" ")[i])
    }

  }
  return newArr.join(" ")
  }
  
  console.log(convertHTML('Stuff in "quotationmarks"'));