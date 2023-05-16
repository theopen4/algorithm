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

def number_strobogrammatique2(n: int or float) -> bool:
    strobo = {"0": "0", "1": "1", "6": "6", "8": "8", "9": "9"}
    if type(n) is int:
        list(str(n))

    left = 0
    rigth = len(n -1)
    while rigth - left >= 0:
        if not n[left] in strobo.keys or n[left] in strobo.keys or n[left] !=strobo[n[rigth]]:
            return False
        rigth -= 1
        left += 1

    return True
    

for i in range(1,1000):
    print("{} : {}".format(i, number_strobogrammatique(i)))