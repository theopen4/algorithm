def factorielle(nb: int ) -> int:
    if nb == 0:
        return 1
    for d in range(1,  nb):
        nb = d * nb

    return nb

print(factorielle(6))
def recur_factorielle(nb):
   if nb == 0 or nb == 1:
       return 1
   return nb * recur_factorielle(nb - 1)

print(recur_factorielle(6)) 
 