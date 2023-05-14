function bouncer(arr){
    let finalArray = [];
    for (let e of arr)
        if(!!e === true)
           finalArray.push(e);

    return finalArray;       
}