function myReplace(str, before, after) {
    let newArr = [];
    let myUpperRegex = /\b[A-Z]/g;
    let myLowerRegex = /\b[a-z]/g;
    for(let i = 0; i < str.split(" ").length; i++){
        if(str.split(" ")[i] == before && myLowerRegex.test(before)){
            newArr.push(after.replace(after[0], after[0].toLowerCase()))
        }
        else if(str.split(" ")[i] == before && myUpperRegex.test(before)){
            newArr.push(after.replace(after[0], after[0].toUpperCase()))
        } else if(str.split(" ")[i] == before){
            newArr.push(after);
        } else{
            newArr.push(str.split(" ")[i])
        }
    }
    return newArr.join(" ");
  }


  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));