// numbers
var charNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// special characters
var charSpecial = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// lowercase
var charLowercase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// uppercase
var charUppercase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var newArray = [];
var endArray = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
var passwordLength = prompt("How many characters do you want your password to be?");
console.log(passwordLength)
passwordLength = parseInt(passwordLength)
console.log(passwordLength)
// THEN I choose a length of at least 8 characters and no more than 128 characters
if (passwordLength < 8 || passwordLength > 128) {
  alert("Your password has to be between 8 and 128 characters.")
  writePassword()
}
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
var charLowercase = confirm("Do you want lowercase characters?")
console.log(charLowercase)
var charUppercase = confirm("Do you want uppercase characters?")
console.log(charUppercase)
var charNumeric = confirm("Do you want numeric characters?")
console.log(charNumeric)
var charSpecial = confirm("Do you want special characters?")
console.log(charSpecial)
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
}
// WHEN I click the button to generate a password
