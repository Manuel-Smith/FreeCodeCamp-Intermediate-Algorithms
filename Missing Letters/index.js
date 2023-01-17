function fearNotLetter(str) {
    let letterString = "abcdefghijklmnopqrstuvwxyz"

    let lowerStrCharPosition = letterString.indexOf(str[0])
    let upperStrCharPosition = letterString.indexOf(str[str.length -1])
    let strLen = upperStrCharPosition - lowerStrCharPosition+1
    let fullRangeArr = []
    for(let i = 0; i < strLen; i++){
        fullRangeArr.push(letterString[lowerStrCharPosition+i])
    }

    let fullRangeArrLength = fullRangeArr.length;
    for(let i = 0; i < fullRangeArrLength; i++){
        if(str.indexOf(fullRangeArr[i]) == -1){
            return fullRangeArr[i]
        }
    }
  }
  
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));