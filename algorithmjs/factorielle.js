function factorielle (nb){
    let nbList = [];
    if (nb == 0){
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

console.log(factorielle(0))