//write a function whom return le word long
// premiere maniere
function findLongestWorlds(str){
    const arrWorld = str.split(' ')
    const lenWorld = arrWorld.map(l => l.length).reduce((long, x) => Math.max(long, x))
    const wordLongs = arrWorld.filter(w => w.length === lenWorld)
    return wordLongs

}


console.log(findLongestWorlds( "bonjour cedric tu risque echouer "))
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

