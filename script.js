// select the generate button
var generateBtn = window.document.querySelector("#generate");

// create password generator function
function generatePassword() {
  // let user choose a length for password
  prompt("Choose a length of your password - enter a number of at least 8 and no more than 128");

  // let user decide if lowercase letters are to be included

  //validate user's choice of yes or no by returning the storage variable

  // let user decide if uppercase letters are to be included

  //validate user's choice of yes or no by returning the storage variable

  // let user decide if numeric values are to be included

  //validate user's choice of yes or no by returning the storage variable

  // let user decide if special characters are to be included

  //validate user's choice of yes or no by returning the storage variable

  
  // generate the password and store in a variable named password

  // alert password on page
}
// when button is clicked, run function
generateBtn.addEventListener("click", generatePassword);
