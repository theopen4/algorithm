#the perfect number is equal to the summ of the divisor strict
def get_divided(nb):
    divisor = []
    for d in range(1, nb+1):
        if(nb % d == 0):
            divisor.append(d)  
    return divisor

print(get_divided(20))

def is_perfect(nb):
    if sum(get_divided(nb) [:-1]) == nb:
        return True
    else:
        return False
    
    
print(is_perfect(28))    

def is_perfect_intervalle(inf: int or float, sup: int or float) -> list[int or float]:
    number_perfect: list [int or float]= []
    for d in range(inf, sup+1):
        if sum(get_divided(d)[:-1]) == d :
            number_perfect.append(d)

    return number_perfect

print(is_perfect_intervalle(1, 1000))        

    