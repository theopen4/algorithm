#spy number
from math import prod
def spy_number(nb: int) -> bool:
    sum_n = sum(map(int, list(str(nb))))
    produ_nb = prod(map(int, list(str(nb))))
    return sum_n == produ_nb
print(spy_number(123))  

    
