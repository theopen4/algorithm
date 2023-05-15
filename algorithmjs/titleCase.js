function titleCase(str){ 
    const strArray = str.toLowerCase().split(' ');
    const arrayWordsUppercase = []
    for (let d of strArray){
        let dArray = [...d]
        dArray[0] = dArray[0].toUpperCase()
        const dWordUpperCase = dArray.join('')
        arrayWordsUppercase.push(dWordUpperCase)
    }
    const wordUpperCase = arrayWordsUppercase.join(' ');
    return wordUpperCase;

}
console.log(titleCase('bonjour samuel ces vraiment gentil'))

