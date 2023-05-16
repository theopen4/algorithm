#number strobgramatiique are  the number  0,1,6,8,9
def number_strobogrammatique(n: int or float)-> bool:
    list_strobogrammatique = ["0","1","6","8","9"]
    list_n = list(str(n))
    v = len(list_n)
    for d in list_strobogrammatique:
        for n in list_n:
            if d == n:
                v -=  1 
    
    if v == 0:
        return True
    else:
        return False

print(number_strobogrammatique(16885))
#second methode 

