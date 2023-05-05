//write a function whom return le word long
// premiere maniere
function findLongestWorld(str){
    const arrayWorld = str.split(' ')
    const lengthWorld = arrayWorld.map(arr => arr.length).reduce((worldLong, x) => Math.max(worldLong, x))
    const worldlongs = arrayWorld.filter(w => w.length === lengthWorld) 
    return worldlongs
}


console.log(findLongestWorld( "bonjour cedric tu risque echouer "))
//deuxieme maniere
function findLongestWorld(str){
     const arrWorld = str.split(' ')
     let worldLongLength = 0;
     arrWorld.forEach(element => {
        if(element.length > worldLongLength){
            worldLongLength = element.length;
        };
        
     });
     const wordLongs = arrWorld.filter(w => w.length === worldLongLength);

     return wordLongs
}
console.log(findLongestWorld( "bonjour ced bonjour"))