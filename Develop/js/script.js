// Assignment Code
var generateBtn = document.querySelector("#generate");

//Creating password object.
var Passwrd = {

  //Property for length of password
  pwdLength: 0,

  //array to hold lowercase letters
  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //array to hold uppercase letters
  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //array to hold numbers
  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //array to hold special characters
  pwdCharacter: [".", "\"", "#", "=", "%", "@", "\'", "(", ")", "-", "+", ",",
    "*", "!", "/", "\\", ":", ";", "<", ">", "$", "?", "&", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
}


function writePassword() {
  //call generatePassword function
  var password = generatePassword();
  
  //set passwordText to target the id password and the <textarea>
  var passwordText = document.querySelector("#password");

  //update the textArea with the new password
  passwordText.value = password;
}

// adding the click function
generateBtn.addEventListener("click", writePassword);

//function to handle the operations to generate a new password
function generatePassword() {

  //holds the password to be generated and returned 
  var result = "";

  //variables to collect input from user prompts
  var passwordLength = 0;
  var upperLetters;
  var lowerLetters;
  var numbers;
  var Special;

  //initialize characters
  passwordLength = 0;
  Passwrd.pwdLength = 0;
  result = "";

  //check password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

    //if user presses cancel
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      //checking user enters an integer
      if (!isFinite(passwordLength)) {
        alert("You didn't enter a number");
        return "Your secure password";
      }
      else {
        //check password meets length criteria
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password needs to be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {

          //call the internal function to show prompts for criteria
          showPrompts();

          //keep adding characters based on criteria until pwdLength is = to the length the user set
          while (Passwrd.pwdLength < passwordLength) {
            //if user does not complete the criteria of selecting these options then show prompt  
            if (lowerLetters === false && upperLetters === false && numbers === false && Special === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              
           //randomly grab a lowercase letter from the array  
              if (lowerLetters === true && Passwrd.pwdLength < passwordLength) {
                var LC = Passwrd.pwdLowerCase[Math.floor(Math.random() * 26)]
                result = result + LC;
                Passwrd.pwdLength++;
              }

              //randomly grab a special character from the array           
              if (Special === true && Passwrd.pwdLength < passwordLength) {
                var SC = Passwrd.pwdCharacter[Math.floor(Math.random() * 32)]
                result = result + SC;
                Passwrd.pwdLength++;
              }

              //randomly grab an uppercase letter from the array 
              if (upperLetters === true && Passwrd.pwdLength < passwordLength) {
                var UC = Passwrd.pwdUpperCase[Math.floor(Math.random() * 26)]
                result = result + UC;
                Passwrd.pwdLength++;
              }
                //randomly grab a number from the array
              if (numbers === true && Passwrd.pwdLength < passwordLength) {
                var NUM = Passwrd.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + NUM;
                Passwrd.pwdLength++;
              }
            }
          }
        }
      }
    }

    //return the generated password back to the calling function
    return result;

    // function to prompt the user for criteria
    function showPrompts() {
      lowerLetters = confirm("Do you want lower case letters?");
      upperLetters = confirm("Do you want upper case letters?");
      numbers = confirm("Do you want numbers?");
      Special = confirm("Do you want special characters?");
    }
  }
}