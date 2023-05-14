function getIndexToIns(arr , num){
    let index = 0
    for (let e of arr )
        if(num > e)
           index++
    return index
}

console.log(getIndexToIns([10,20,30,40,50,60], 35))
