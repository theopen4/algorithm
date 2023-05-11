function congirmEnding(str, target){
    const arrayLetter = [...str]
    let bool = true; 
    for (d of arrayLetter){
        if (d === target)
           bool = true

        else
          bool = false   
    }
    return bool

}
console.log(congirmEnding('bonjous', 's'))

function confirmEnding(str, target){
    return str.endsWith(target)
}

console.log(confirmEnding('bonjour', 'jour'))