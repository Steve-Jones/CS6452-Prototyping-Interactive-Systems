########## lecture-3 ##########

# def reverse(str):
#     result = ""
#     for letter in str:
#         result = letter + result
#     print result
#
# reverse("Steve Jones")

#####

# def multiReturn(a, b, c):
#     return a * 10, b * 100, c * 1000
#
# print multiReturn(2,2,2)
#
# ##### Dictionary #####
# d = {"name":"Steve", "phone":"9788578901"}
# print "Name: " + d["name"]
# d["name"] = "Jones"
# print "Name: " + d["name"]
# print d

s = "This is a very long string"
# {'a': 1, ' ': 5, 'e': 1, 'g': 2, 'i': 3, 'h': 1, 'l': 1, 'o': 1, 'n': 2, 's': 3, 'r': 2, 'T': 1, 'v': 1, 'y': 1, 't': 1}
dict = {}


for letter in s:
    letter = letter.lower()
    if dict.has_key(letter):
        dict[letter] += 1
    else:
        dict[letter] = 1

print dict
