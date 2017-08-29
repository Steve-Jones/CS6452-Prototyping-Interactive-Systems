# hasPasswordBeenGiven = False
#
# while not hasPasswordBeenGiven:
# 	word = raw_input("Password:")
#
# 	if word == "1234":
# 		print "Correct"
# 		hasPasswordBeenGiven = True
# 	else:
# 		print "Incorrect password"

#Take number inputs until -1 --> find average

def computeAverage(total, count):
	return float(total) / count

def runningAverage():
	num = input("Enter a number: ")

	runningTotal = 0
	count = 0

	while num != -1:
		runningTotal += num
		count += 1
		num = input("Enter a number: ")

	if count != 0:
		print "Average = ", computeAverage(runningTotal, count)
	else:
		print "You didn't enter numbers"

runningAverage()
