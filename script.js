// Assignment code here
/* Pseudo-Code
- define acceptable inputs: lower case, uppercase, numbers, symbols
    * create object with all items in it
- define length: minimum 8, maximum 128
- create prompts for user to select desired criteria
- when user inputs criteria validate and include selected criteria
- 

*/

var characters = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz".split(''),
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
  numbers: "123456789".split(''),
  symbols: "!@#$%^&*()".split('')
};

function userInput () {
  // This converts user input into a number, if user doesn't enter a number the process is ended and they're informed why.
  var length = parseInt(prompt("Select number of characters between 8 and 128 for password."));
  if (Number.isNaN(length)) {
    alert("Number of characters must be a number value.");
    return null;
  };
  // Password length must be minimum 8 characters, if not process is ended and user is informed why.
  if (length < 8) {
    alert("Password must be at least 8 characters.");
    return null;
  };
  // Password length must be no more than 128 characters, if not process is ended and user is informed why.
  if (length > 128) {
    alert("Password must be at least 8 characters.");
    return null;
  };
  // Following section confirms what kinds of input user wishes to include.
  var lower = confirm("Click OK to confirm including lower case letters.");
  console.log(lower);
  var upper = confirm("Click OK to confirm including upper case letters.");
  console.log(upper);
  var numbers = confirm("Click OK to confirm including numbers.");
  console.log(numbers);
  var symbols = confirm("Click OK to confirm including symbols.");
  console.log(symbols);
  // If user doesn't select any input criteria process is ended and user is informed why.
  if (!lower && !upper && !numbers && !symbols) {
    alert("Password must have input criteria!");
    return null;
  }
  // Input data is collected in an array so it can be accessed in following steps.
  return [lower, upper, numbers, symbols, length];
}

function generatePassword() {
  var options = userInput();
  if (options[0] = true) {
    console.log(options);
  }
  
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
