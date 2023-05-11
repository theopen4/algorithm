function factorielle (nb){
    const nbList = [];
    if (nb === 0){
        return 1
    }
    do {
        nbList.push(nb);
        nb = nb-1
    }
    while(nb !== 0)

    const nbFactoriel = nbList.reduce((facto, x) => facto * x)
    return nbFactoriel

}

console.log(factorielle(10))

function facto(num){
    if (num === 0){
        return 1
    }
    for (i = num - 1; i > 1; i--){
        num *= i
    }
    return num
}
console.log(facto(5))