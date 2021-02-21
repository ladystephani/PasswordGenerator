// select the generate button
var generateBtn = window.document.querySelector("#generate");

// create password generator function
function generatePassword() {
  // let user choose a length for password
  var number = prompt("Choose a length of your password - enter a number of at least 8 and no more than 128");

  // let user confirm true when ok is clicked or false when cancel is clicked to include lowercase letters
  var lowerCase = confirm("Do you want to include lowercase letters?");
  // let user decide if uppercase letters are to be included
  var upperCase = confirm("Do you want to include uppercase letters?");
  // let user decide if numeric values are to be included
  var numeric = confirm("Do you want to include numeric values?");
  // let user decide if special characters are to be included
  var special = confirm("Do you want to include special characters?");
  
  var lowercaseLetter = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericValue = "0123456789";
  var specialCharacter = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var character;
  // generate the password and store in a variable named password
  var password = '';
  // user must choose at least one type
  if (!lowerCase && !upperCase && !numeric && !special) {
    alert("Please choose at least one character type.")
    //todo:rerun confirm prompts
    generatePassword();

    //one case of choosing all four types
  } else if (lowerCase && upperCase && numeric && special) {
      console.log("all four chosen"); //test succeeded
    
      character = lowercaseLetter.concat(uppercaseLetter, numericValue, specialCharacter)
      //console.log(character); 
    
      // choose randomly from variable character with the password length 
      for (var i = 0; i < number; i++) {
        
        var randomCharacter = character[Math.floor(Math.random() * character.length)];
        //console.log(randomCharacter);
        password = password.concat(randomCharacter);

      }
    

    //four cases of choosing three types
  } else if (lowerCase && upperCase && numeric && !special) {
    console.log("abc");
    
    
  } else if (lowerCase && upperCase && !numeric && special) {
    console.log("abd")
    
    
  } else if (lowerCase && !upperCase && numeric && special) {
    console.log("acd")
    
    
  } else if (!lowerCase && upperCase && numeric && special) {
    console.log("bcd")
    
    //six cases of choosing two types
  } else if (lowerCase && upperCase && !numeric && !special) {
    console.log("ab")
    
  } else if (lowerCase && !upperCase && numeric && !special) {
    console.log("ac")
    
  } else if (lowerCase && !upperCase && !numeric && special) {
    console.log("ad")
    
  } else if (!lowerCase && upperCase && numeric && !special) {
    console.log("bc")
    
  } else if (!lowerCase && upperCase && !numeric && special) {
    console.log("bd")
    
  } else if (!lowerCase && !upperCase && numeric && special) {
    console.log("cd")
    
    //four cases of choosing one type
  } else if (lowerCase && !upperCase && !numeric && !special) {
    console.log("a")
    
  } else if (!lowerCase && upperCase && !numeric && !special) {
    console.log("b")
    
  } else if (!lowerCase && !upperCase && numeric && !special) {
    console.log("c")
    
  } else {
    console.log("d")
  }
  

  // alert password on page
  alert("Here's your password: " + password);
}
// when button is clicked, run function
generateBtn.addEventListener("click", generatePassword);
