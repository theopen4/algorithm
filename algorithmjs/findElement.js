function findElement(arr, fn){
    let num = 0;
    for (let d of arr){
        if (fn(d)){
            num = d
            break;
        }  
    }
    if (num === 0)
       return undefined
    return num

}

console.log(findElement([1,,3,5], num => num % 2 === 0));