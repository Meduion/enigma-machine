// Assignment code here
/* Pseudo-Code
- define acceptable inputs: lower case, uppercase, numbers, symbols
    * create object with all items in it
- define length: minimum 8, maximum 128
- create prompts for user to select desired criteria
- when user inputs criteria validate and include selected criteria
- 

*/

function generatePassword() {
  console.log(characters.lowerCase)
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
