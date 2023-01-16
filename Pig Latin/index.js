function translatePigLatin(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let consonantHolder = []
    let remainderHolder = []
    for(let i = 0; i < str.length; i++){
        if(vowels.indexOf(str[i])==-1){
            consonantHolder.push(str[i])
        } else {
            remainderHolder.push(str.slice(i));
            break;
        }
    }

    if(consonantHolder.length != 0){
        return `${remainderHolder.concat(consonantHolder.join("")).join("")}ay`;
    } else {
        return `${str}way`
    }
    
  }
  
  console.log(translatePigLatin("algorithm"));