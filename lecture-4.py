########## lecture-4 ##########
filename = raw_input("Enter a filename: ")
term = raw_input("Give me a search term: ")

file = open(filename, "r")
contents = file.readLines()
file.close()

for line in contents:
    if line.find(term) != -1:
        # we fount it in this line
        print line
    



#
#
# try:
#     file = open(filename, "r")
#     contents = file.read()
#     count = contents.count(term)
#     print "The term", term, "occurs", count, "times in", filename
# except:
#     print "Couldn't open the file", filename
#
# try:
#     file = open(filename, "r")
#     contents = file.readLines()
#     file.close()
#
#     for i in range (0, len(contents)):
#         print contents[i]
#     except:
#         print "Couldn't open the file", filename
#
