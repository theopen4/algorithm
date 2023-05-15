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
// this function return the first element of an array to uppercase
console.log(titleCase('bonjour samuel ces vraiment gentil'))

function titleCase2(str){
    str = str.toLowerCase().split(' ');
    let finallyWord = []
    for(let word of str){
        finallyWord.push(word.replace(word[0], word[0].toUpperCase()));
    }
    return finallyWord.join(' ');
}

console.log(titleCase2('ces de sa quil sagit'))

