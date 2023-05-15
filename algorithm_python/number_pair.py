def pair(n: int or float) -> bool:
    return n % 2 == 0

print(pair(3))

def intervalle_pair(inf: int or float, sup: int or float)->list[int]:
    number_pair = []
    for d in range(inf , sup):
        if pair(d):
            number_pair.append(d)

    return number_pair

print(intervalle_pair(1,100))

for i in range(1, 100):
    print("{} : {}".format(i,pair(i)))