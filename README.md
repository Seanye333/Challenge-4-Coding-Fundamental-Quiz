#C Challenge-4-Coding-Fundamental-Quiz
# Challenge-3-Password-Generator
## Link to application 
https://seanye333.github.io/Challenge-3-Password-Generator/

## Description
This repository contains the code for a Password-Generator with prompt and confirm windows. Users will be able to input number of characters to be in the password and apply the criterias to the output including uppercase alphabets, lowercase alphabets, numbers, and special characters. 

The code includes Javascript, HTML and CSS files necessary to generate the password within the password display window. The sequence of operation is described below: 
1. the generate password push button is pushed, then popup prompt window
2. ask for length of password 
3. verify length of password from users input - must be at least 8 characters and no more than 128
4. if step 3 is false, display "password must be at leat 8 character and no more than 128"
5. if step 3 is true, display Confirm window " include lowercase? " with button 'ok' and 'cancel'
6. display Confirm window "include uppercase?"
7. display Confirm window "include numeric?"
8. display Confirm window "special characters?
9. if at least once prompt window is select yes, then display in the generator box 
10. if not, display prompt window "need to have at leastt one character 
11. restart from step 5
  
From this assignment: I learned how to apply if statement, for loop, functions, and var, etc. to the code. 

## Installation
To install this project within your computer, please follow the instruction below
1. Open git bash
2. Create your own file
3. To clone the repository: type in git clone https://github.com/Seanye333/Challenge-3-Password-Generator.git
4. Navigate to the project directory: cd <project_directory>
5. Open the file in the web browser: open index.html
6. Website will display on your default browser

## Usage
Please open the HTML file (index.html) in a web browser to view the homepage. The CSS file (style.css) and javascript file are referenced in the HTML file and automatically applied to the webpage in the web browser. The website will be deployed for all users to use by simply copy and paste to browser.

![alt text](assets/images/PasswordGenerator.png)

## Credits
To understand how to randomly generate passwords , mdn web was utilized to learn the concepts: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

## License
This project is licensed under the MIT License.

## Features
Following features are from original acceptance criteria from the project: 

    GIVEN I need a new, secure password
    WHEN I click the button to generate a password
    THEN I am presented with a series of prompts for password criteria
    WHEN prompted for password criteria
    THEN I select which criteria to include in the password
    WHEN prompted for the length of the password
    THEN I choose a length of at least 8 characters and no more than 128 characters
    WHEN asked for character types to include in the password
    THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    WHEN I answer each prompt
    THEN my input should be validated and at least one character type should be selected
    WHEN all prompts are answered
    THEN a password is generated that matches the selected criteria
    WHEN the password is generated
    THEN the password is either displayed in an alert or written to the page

## How to Contribute
Contributions to this project are not avaiable currently.
