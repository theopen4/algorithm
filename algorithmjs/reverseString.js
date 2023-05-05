function reverseString(str){
    const strin = [...str].reverse().join('')

    return strin
}

console.log(reverseString('hello word'))