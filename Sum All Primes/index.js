function allPrimestoNum(num){
    let count = 0;

    // function to check if the number is prime or not.
    function testPrime(testNum){
        let sqrt = Math.sqrt(testNum)
        for(let i = 2; i <= sqrt; i++){
            if(testNum % i === 0){
                return false;
            }
        }
        return true;
    }
    // Loop that add the sum of all prime numbers
    for(let i = 2; i <= num; i++){
        if(testPrime(i)){
            count +=i
        }
    }
    return count;
}

console.log(allPrimestoNum(977))