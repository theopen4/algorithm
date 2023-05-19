function chunkArrayInGroup(arr, size){

    const arrFinal = [];
    while (arr.length > 0)
       arrFinal.push(arr.splice(0, size))
    return arrFinal

}

console.log(chunkArrayInGroup(['a','b','c','d'], 2))