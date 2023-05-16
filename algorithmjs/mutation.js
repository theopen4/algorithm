function mutation(arr){
    if (arr[0].toLowerCase() === arr[1].toLowerCase())
        return true;
    
    return false;

}


function mutation2(arr){
   const firStr = arr[0].toLowerCase()
   const secondStr = arr[1].toLowerCase()
    for (let cha of secondStr){
        if(firStr.indexOf(cha) === -1){
           return false;
        }   
    }       
    return true       
}
console.log(mutation2(['hello', 'ello']))