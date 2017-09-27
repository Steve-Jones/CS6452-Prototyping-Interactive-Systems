import re
import csv
import sys
from operator import itemgetter


def main():
    print "running...\n"

    ## Load College Scorecard Data
    with open('CollegeScorecard_2014.csv', 'rb') as csvFile:
        reader = csv.DictReader(csvFile)
        data = [row for row in reader]


    # Request user input unti "quit"
    while True:
        # Prompt user to enter command
        user_input = raw_input("\nEnter a command: ")

        # Break loop if user input is "quit"
        if user_input == "quit":
            break

        # Catch if invalid input
        try:
            processInput(user_input, data)
        except:
            print "\nInvalid input, please try again"


# Process users command
def processInput(user_input, data):
    inputList = user_input.split()


    ## max <field>:
    #given a particular field name, find and print the data that has the maximum value for this field across your entire data set.
    if inputList[0] == "max":
        maximum = 0
        school = ""

        # Iterate through list of dictionaries
        for k in data:
            if k[inputList[1]] != "NULL":
                if float(maximum) < float(k[inputList[1]]):
                    school = k['SCHOOL']
                    maximum = max(float(maximum), float(k[inputList[1]]))
                elif maximum == float(k[inputList[1]]):
                    school += "\nand " + str(k['SCHOOL'])

        # Print Max Schools/Values
        print "\nMax value in column '{}' is... \n{}\nwith a value of: {}\n".format(inputList[1], school, maximum)


    ## min <field>:
    #given a particular field name, find and print the data that has the minimum value for this field.
    elif inputList[0] == "min":
        minimum = float("inf")
        school = ""

        # Iterate through list of dictionaries
        for k in data:
            if k[inputList[1]] != "NULL":
                if float(minimum) > float(k[inputList[1]]):
                    school = k['SCHOOL']
                    minimum = min(float(minimum), float(k[inputList[1]]))
                elif minimum == float(k[inputList[1]]):
                    school += "\nand " + str(k['SCHOOL'])

        # Print Min Schools/Values
        print "\nMinimum value in column '{}' is... \n{}\nwith a value of: {}\n".format(inputList[1], school, minimum)


    ## avg <field>:
    #given a field name, compute the average of all values in your data for this field. (You can assume this will only be called on fields that have numeric values.)
    elif inputList[0] == "avg":
        total = 0.0
        count = 0.0

        # Iterate through list of dictionaries
        for k in data:
            if k[inputList[1]] != "NULL":
                count += 1
                total += float(k[inputList[1]])

        avg = total / count
        print "\nAverage value in column '{}' is: {}\n".format(inputList[1], avg)


    ## search <field> <value>:
    #find all data in your dataset for which the named field has the indicated value.
    elif inputList[0] == "search":
        keys = data[0].keys()
        print "\n{:<25} {:<70} {:<10} {:<10} {:<10} {:<10} {:<10}".format(keys[0], keys[1], keys[2], keys[6], keys[4], keys[5], keys[3])

        # Iterate through list of dictionaries
        for k in data:
            if k[inputList[1]] == inputList[2]:
                items = k.items()
                print "{:<25} {:<70} {:<10} {:<10} {:<10} {:<10} {:<20}".format(items[0][1], items[1][1], items[2][1], items[6][1], items[4][1], items[5][1], items[3][1])


    ## range <field> <min> <max>:
    #find all data in your dataset for which the named field has values between the specified min and max, and display in ascending order.
    elif inputList[0] == "range":
        keys = data[0].keys()
        print "\n{:<25} {:<70} {:<10} {:<10} {:<10} {:<10} {:<10}".format(keys[0], keys[1], keys[2], keys[6], keys[4], keys[5], keys[3])

        newList = []
        sortedList = []
        # Iterate through list of dictionaries
        for k in data:
            if k[inputList[1]] != "NULL":
                if float(k[inputList[1]]) >= float(inputList[2]):
                    if float(k[inputList[1]]) <= float(inputList[3]):
                        newList.append(k)

        # print newList
        sortedList = sorted(newList, key=itemgetter(inputList[1]))

        # print sortedList
        for dictIndex in sortedList:
            items = dictIndex.items()
            print "{:<25} {:<70} {:<10} {:<10} {:<10} {:<10} {:<20}".format(items[0][1], items[1][1], items[2][1], items[6][1], items[4][1], items[5][1], items[3][1])


main()
