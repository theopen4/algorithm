function repeatStringNumTime(str, num){
    let strFinal = []
    while(num !== 0){
        strFinal.push(str)
        num--
    }
    return strFinal.join('')

}

console.log(repeatStringNumTime('a', 7))