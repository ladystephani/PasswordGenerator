// select the generate button
var generateBtn = window.document.querySelector("#generate");

// create password generator function
function generatePassword() {
  // let user choose a length for password
  // if user entered number is not at least 8 and no more than 128 characters, make user re-enter
  var number = prompt("Choose a length of your password - enter a number of at least 8 and no more than 128");
  // if ( number < 8 || number > 128 ) {
  //   alert("Your value isn't at least 8 and no more than 128 characters. Please re-enter.");
  //   generatePassword();
  // } else {
  //   //pass
  // }

  // let user confirm true when ok is clicked or false when cancel is clicked to include lowercase letters
  var lowerCase = confirm("Do you want to include lowercase letters?");
  // let user decide if uppercase letters are to be included
  var upperCase = confirm("Do you want to include uppercase letters?");
  // let user decide if numeric values are to be included
  var numeric = confirm("Do you want to include numeric values?");
  // let user decide if special characters are to be included
  var special = confirm("Do you want to include special characters?");
  
  var lowercaseLetter = "abcdefghijklmnopqrstuvwxyz"; //a
  var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//b
  var numericValue = "0123456789";//c
  var specialCharacter = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";//d
  var character;
  // generate the password and store in a variable named password
  var password = '';

  function addCharacter() {
    // choose randomly from variable character with the password length 
    for (var i = 0; i < number; i++) {
        
      var randomCharacter = character[Math.floor(Math.random() * character.length)];
      //console.log(randomCharacter);
      password = password.concat(randomCharacter);

    }
  }

  // user must choose at least one type
  if (!lowerCase && !upperCase && !numeric && !special) {
    alert("Please choose at least one character type.");
    //rerun confirm prompts
    generatePassword();

    //one case of choosing all four types
  } else if (lowerCase && upperCase && numeric && special) {
      //console.log("all four chosen"); test succeeded
    
      character = lowercaseLetter.concat(uppercaseLetter, numericValue, specialCharacter);
      //console.log(character); 
    
      addCharacter();

    //four cases of choosing three types
  } else if (lowerCase && upperCase && numeric && !special) {
      //console.log("abc");

      character = lowercaseLetter.concat(uppercaseLetter, numericValue);
      addCharacter();
    
  } else if (lowerCase && upperCase && !numeric && special) {
      //console.log("abd");
      character = lowercaseLetter.concat(uppercaseLetter, specialCharacter);
      addCharacter();
    
    
  } else if (lowerCase && !upperCase && numeric && special) {
      //console.log("acd");
      character = lowercaseLetter.concat(numericValue, specialCharacter);
      addCharacter();
    
  } else if (!lowerCase && upperCase && numeric && special) {
      //console.log("bcd");
      character = uppercaseLetter.concat(numericValue, specialCharacter);
      addCharacter();
    
    //six cases of choosing two types
  } else if (lowerCase && upperCase && !numeric && !special) {
      //console.log("ab")
      character = lowercaseLetter.concat(uppercaseLetter);
      addCharacter();
    
  } else if (lowerCase && !upperCase && numeric && !special) {
      //console.log("ac")
      character = lowercaseLetter.concat(numericValue);
      addCharacter();
    
  } else if (lowerCase && !upperCase && !numeric && special) {
      //console.log("ad")
      character = lowercaseLetter.concat(specialCharacter);
      addCharacter();
    
  } else if (!lowerCase && upperCase && numeric && !special) {
      //console.log("bc")
      character = uppercaseLetter.concat(numericValue);
      addCharacter();
    
  } else if (!lowerCase && upperCase && !numeric && special) {
      //console.log("bd")
      character = uppercaseLetter.concat(specialCharacter);
      addCharacter();
    
  } else if (!lowerCase && !upperCase && numeric && special) {
      //console.log("cd")
      character = numericValue.concat(specialCharacter);
      addCharacter();
    
    //four cases of choosing one type
  } else if (lowerCase && !upperCase && !numeric && !special) {
      //console.log("a")
      character = lowercaseLetter;
      addCharacter();
    
  } else if (!lowerCase && upperCase && !numeric && !special) {
      //console.log("b")
      character = uppercaseLetter;
      addCharacter();
    
  } else if (!lowerCase && !upperCase && numeric && !special) {
      //console.log("c")
      character = numericValue;
      addCharacter();
    
  } else {
      //console.log("d")
      character = specialCharacter;
      addCharacter();
  }
  

  // alert password on page
  alert("Here's your password: " + password);
}
// when button is clicked, run function
generateBtn.addEventListener("click", generatePassword);
