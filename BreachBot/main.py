#Breach Bot Starter Code
breachYear = 2019

#Greets user
print("Hello! I'm Breach Bot.")
userName = input("What is your name?\n")
print("Nice to meet you " + userName)

#Recounts year of breach
todaysYear = input("What year is it?\n")
timePassed = int(todaysYear) - breachYear
print("Wow! That means it has been " + str(timePassed) + " years since the Facebook breach!")

#Introduces breach
print("Would you like to learn about the 2019 Facebook data breach?")
giveInfo = input("Type 'yes' or 'no'\n")

#Explains breach
while giveInfo.lower() == "yes":
  print("What would you like to learn more about? Enter the lowercase letter of the following options: \n(a) breach details, (b) organizations response, or (c) Breach Bot's reflection")
  topic = input()
  
  if topic.lower() == "a":
    print("Personal information of 530 million Facebook users was stolen and posted to an amateur hacking forum. This information included phone numbers, locations, full names, and some email addresses. The hackers exploited a vulnerability in the “Add Friends” feature that allows users to find each other via phone numbers.")
  
  elif topic.lower() == "b":
    print("Facebook settled a $5 billion lawsuit with the U.S. Federal Trade Commission for violating an agreement with the agency that requires user privacy. Afterward, Facebook patched the “Add Friends” vulnerability to prevent something similar from happening again. Despite this, the users whose personal information was stolen were not notified of the data breach.")
  
  elif topic.lower() == "c":
    break
  
  else:
    print("Sorry, I didn't catch that. Choose one of the options listed.")
  
  input("Press enter to continue\n")

#Introduces my take
print("\nI'm excited to share my perspective with you. Are you ready to hear my take?")
giveInfo = input("Type 'yes' or 'no'\n")

#Shares my take
while giveInfo.lower() == "yes":
  print("What would you like to learn more about? Enter the lowercase letter of the following options: \n(a) relation to the CIA Triad, (b) my reaction, (c) my advice, or (d) none")
  topic = input()
  
  if topic.lower() == "a":
    print("This data breach connects to the CONFIDENTIALITY pillar of the CIA Triad because private information of 530 million Facebook users was made public.")
  
  elif topic.lower() == "b":
    print("I disagree with the organization’s response because the users affected by the data breach were not notified. They were left unaware that the data breach happened to them, so they were unable to take action and make the decision on whether or not to keep using Facebook.")
  
  elif topic.lower() == "c":
    print("My advice would be to limit the information users give to companies. For instance, instead of using a personal email address for Facebook, use an email address that is less important. Additionally, turn off your location settings and don’t provide your full name unless necessary. These little things can help protect your information if a data breach does happen.")

  elif topic.lower() == "d":
    break
  
  else:
    print("Sorry, I didn't catch that. Choose one of the options listed.")
  
  input("Press enter to continue\n")

#Chatbot ends conversation
print("Thanks for chatting with me, and I hope you learned something new!")