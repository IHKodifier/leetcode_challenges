# # square = [2**x for x in range(64)]
# # print(square,sep=' | ')

# vec = [[1, 2, 3], [4, 5, 6], [7, 8, 9],[10,11,12,13,14,15]]
# result = [n for elem in vec for n in elem]
# # # print (result)
# # from math import pi
# # for i in range (10):
# #         print(str(round(pi,i)))
# matrix = [
#     0,1,2,3,4,5,6,7,8
#     ]
# matrix.insert(5,'jkl')
# print(matrix)
# # transposed =[]
# # for i in range (len(matrix[0])):
# #     transposed.append([row[i] for row in matrix])
# # # transpose = [[row[i] for row in matrix] for i in range(4)]

# # print(transposed)


# /    ------------------------  SETS -----------------------
# a = set('135579')
# b = set('246785')
# # print(f"DIFFERENCE {a-b}")                          # DIFFERENCE
# # print(f"UNION= {a|b}")                              # UNION
# # print(f"INTERSECTION = {a&b}")                      # INTERSECTION
# #SYMMETRIC DSIFFERENCE AKA UNION -INTERSECTION
# print(f"SYMMETRIC DSIFFERENCE= {a^b}")


# even = [x for x in range(2000) if x % 2 == 0]
# print (even)
# even.z
# a= 'ahteram'
# print(a)
# print(a[::-1])
# a= set()
# a.add(2)
# a.add(9)
# a.add(2)
# print (a)
# a = {x: x**2 for x in range(0,13,2)}


#  REVERSE A STRING
# s='ahteram'
# print (s[::-1])


# # print(a)
# for i in reversed(range(1, 20, 2)):
#     print(i)


#                    DICTIONARIES
# a= {x: x**2 for x in (2, 4, 6)}
# print(a)
# b = dict(name='john',age=52)
# print(b)
# knights = {"the key ": "the value", "robin": "the brave",'The Saifullah':'Khalid '}
# # for k,v in knights.items():
# #     print(k,' || ',v)
# # for item in knights.items():
# #     print(item[0]+ ' | '+item[1])
# for i,k in enumerate(knights):
#     print(i,k)


# basket = ["apple", "orange", "apple", "pear", "orange", "banana"]
# print(sorted((basket)))
# print(set(basket))

import math
# for i in range(1100):
#     # print(f'factoriasl of {i} = {math.factorial(i)}')
#     print(f'square root of {i} = {math.sqrt(i)}')

# print(math.remainder(1000,300))
# print(math.exp(2))
# for i in range(11):
#     print(f'{i} --->{math.exp2(i)}')

# print(math.degrees(math.pi))
# a=[x for x in range(11)]
# print(a)
# b=[x for x in range(3,11,2)]
# print(b)
# del a[4:10]
# print(a)
# a[4:9]=b
# print(a)
s='jkl'
# print(s)
# s*=3
# print(s)
# a.pop(9)
# a.remove(4)
# a.reverse()
# print (a)

# # print((1, 2, 5, 6)> (1, 2, 4))
# print((1, 2, 3) == ('a','b','c'))


#                       IMPORTING
# import fibo
# import sys
# import builtins
# print(dir(builtins))
# from  fibo import *
# from fibo import printFib as fibonacci
# fibonacci(100)
# printFib(100)

# print(fibo.__name__)
# print(fibo.__dict__)
# # fibo.printFib(1000)
# print(getFib2(9999))

# def fib(n): # write Fibonacci series up to n
#     a, b = 0, 1
#     while a < n:
#         print(a, end=' ')
#         a, b = b, a+b
#         print()
# fib(100)
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
# nums.extend
nums.reverse()
print(nums)

# print(d)
s = "   fly me   to   the moon  "
print(s.split())
