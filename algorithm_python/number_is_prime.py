
def number_is_prime(nb: int or float) -> bool:
    if nb < 2:
        return False
    for d in range(2, nb):
        if nb % d == 0:
          return False
    return   True

print(number_is_prime(5))    
 
def get_prime_list(inf: int or float, sup: int or float) -> list:
     prime_list: list= []
     for nb in range(inf, sup + 1):
         if number_is_prime(nb):
             prime_list.append(nb)
     return prime_list

print(get_prime_list(1, 100))

def is_sg_prime(f) -> list:
    array_sg_number = []
    for l in f:
       if number_is_prime(l) and number_is_prime(2*l+1):
          array_sg_number.append(l)
          
    return array_sg_number
    
print(is_sg_prime(get_prime_list(1, 100)))    






    
       