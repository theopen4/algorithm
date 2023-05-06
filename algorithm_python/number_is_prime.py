def number_is_prime(nb: int or float) -> bool:
    prime = True
    for d in range(2, nb):
        if nb % d == 0:
            prime = False
            return prime

    return prime

print(number_is_prime(5))    
       