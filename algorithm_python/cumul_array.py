def cumul_valeur(list_valeur: list) -> list:
    if not list_valeur:
        return []
    resultat = []
    for index in range(len(list_valeur)):
      somme = sum(list_valeur[0: index + 1])
      resultat.append(somme)
      return resultat
    
print(cumul_valeur([1,2,4,5]))    

