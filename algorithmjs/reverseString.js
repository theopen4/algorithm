function reverseString(str){
    str = [...str].reverse().join('');
    return str;

}

console.log(reverseString('hello world'));