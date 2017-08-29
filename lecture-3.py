#lecture-3

def reverse(str):
    result = ""
    for letter in str:
        result = letter + result
    print result

reverse("Steve Jones")
