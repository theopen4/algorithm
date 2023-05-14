#spy number
from math import prod
def spy_number(nb: int) -> bool:
    sum_n = sum(map(int, list(str(nb))))
    produ_nb = prod(map(int, list(str(nb))))
    return sum_n == produ_nb
print(spy_number(123))  

def spy_number_intervalle(inf: int or float, sup: int or float) -> list:
    list_spy_number: list = []
    for d in range(inf, sup):
        if spy_number(d):
            print("{} est un spy number".format(d))
            list_spy_number.append(d)

    return list_spy_number    


print(spy_number_intervalle(1,100))

    
