function truncateString(str, num){
    if (num >= str.length)
        return str
    
    return str.slice(0, num) + '...'
    
}
console.log(truncateString('string merci',7))