import os, sys
from textblob import TextBlob

def main():
    # Pass folder name as parameter
    folderName = raw_input("Enter a folder name (in current directory): ")
    cwd = os.getcwd()
    path = cwd + "/" + folderName

    # Get contents of folder (using os.listdir)
    folderContents = os.listdir(path)

    # Corpus Words
    corpTotal = 0
    corpUnique = 0
    corpContents = ""

    # Iterate through all text files (ending in .txt)
    for fileName in folderContents:
        if fileName.lower().endswith('.txt'):
            # Read in contents of text files
            try:
                file = open(folderName + "/" + fileName, "r")
            except:
                print "Couldn't open the file", fileName

            contents = file.read() # Read in .txt file
            blob = TextBlob(contents) #Create blob

            contents = cleanContents(contents) # Clean it
            corpContents += contents

            # Individual Doc
            wordDict = countContents(contents) # Count number of times each unique word appears in that file
            totalWords = len(wordDict) # Number of total unique words in file

            ### PRINT STATEMENT ###
            print "File: " + fileName
            for key in wordDict:
                print key + ": " + str(wordDict[key]) + " (" + str((wordDict[key] / float(totalWords))) + "% of total words)"
            print "Sentiment is " + sentimentDescription(blob.sentiment.polarity) + " (" + str(blob.sentiment.polarity) + ")"
            print "Subjectivity is " + subjectivityDescription(blob.sentiment.subjectivity) + " (" + str(blob.sentiment.subjectivity) + ")"

            file.close()

    # Doc Corpus
    corpTotalWords = len(corpContents.split())
    corpWordDict = countContents(corpContents) # Count number of times each unique word appears in that file
    corpUniqueWords = len(corpWordDict) # Number of total unique words in file

    print "Document corpus contains " + str(corpTotalWords) + " total words (" + str(corpUniqueWords) + " unique words)"
    # print "Document corpus contains " + "total words (" + str(corpUniqueWords) + " unique words)"


def cleanContents(contents):
    contents = contents.replace(',','') #remove commas
    contents = contents.replace('.','') #remove periods
    contents = contents.replace('"','') #remove quotes
    contents = contents.replace(':','') #remove :
    contents = contents.replace('--','') #remove --
    contents = contents.replace('&','') #remove &
    contents = contents.lower() #make lowercase
    return contents

def countContents(contents):
    dict = {}
    for word in contents.split():
        if dict.has_key(word):
            dict[word] += 1
        else:
            dict[word] = 1
    return dict

# The polarity score is a float within the range [-1.0, 1.0].
def sentimentDescription(polarity):
    if polarity >= 0.8:
        return "EXTREMELY POSITIVE"
    elif polarity >= 0.5:
        return "VERY POSITIVE"
    elif polarity >= 0.2:
        return "POSITIVE"
    elif polarity > 0:
        return "PRETTY NUETRAL, BUT SLIGHTLY POSITIVE"
    elif polarity <= -0.8:
        return "EXTREMELY NEGATIVE"
    elif polarity <= -0.5:
        return "VERY NEGATIVE"
    elif polarity <= -0.2:
        return "NEGATIVE"
    elif polarity < 0:
        return "PRETTY NUETRAL, BUT SLIGHTLY NEGATIVE"
    else:
        return "COMPLETELY NUETRAL"

# The subjectivity is a float within the range [0.0, 1.0] where 0.0 is very objective and 1.0 is very subjective.
def subjectivityDescription(subjectivity):
    if subjectivity >= 0.9:
        return "EXTREMELY SUBJECTIVE"
    elif subjectivity >= 0.75:
        return "VERY SUBJECTIVE"
    elif subjectivity >= 0.6:
        return "SUBJECTIVE"
    elif subjectivity > 0.5:
        return "PRETTY NUETRAL, BUT SLIGHTLY SUBJECTIVE"
    elif subjectivity < 0.5:
        return "PRETTY NUETRAL, BUT SLIGHTLY OBJECTIVE"
    elif subjectivity <= 0.4:
        return "OBJECTIVE"
    elif subjectivity <= 0.25:
        return "VERY OBJECTIVE"
    elif subjectivity < 0.1:
        return "EXTREMELY OBJECTIVE"
    else:
        return "COMPLETELY NUETRAL"

main()
