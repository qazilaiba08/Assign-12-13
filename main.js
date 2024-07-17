
//Q 1 Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

function checkCharacterType(char) {
     // Get the ASCII value of the character
  
     let asciiValue = char.charAt(0);
    
     // Check if the character is a digit (0-9)
     if (asciiValue >= 48 && asciiValue <= 57) {
         return "The character is a number.";
     }
     
     // Check if the character is an uppercase letter (A-Z)
     if (asciiValue >= 65 && asciiValue <= 90) {
         return "The character is an uppercase letter.";
     }
     
     // Check if the character is a lowercase letter (a-z)
     if (asciiValue >= 97 && asciiValue <= 122) {
         return "The character is a lowercase letter.";
     }
     
     // If none of the above, it's an unknown character type
     return "The character is neither a number, uppercase letter, nor lowercase letter.";
 
    }
 // Example usage
 let char = prompt("Enter a character:");
 let result = checkCharacterType(char);
 console.log(result);

 //2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

let a = 5;
let b = 10;
if (a > b) {
  console.log("the number is larger than "+ a);
} else if (a < b) {
 console.log("the larger number is "+ b);
} else {
 console.log("the two numbers are equal");
}
let Result = (a,b)
console.log(Result);

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

let userInput = prompt("Enter anumber");
let Number = parseFloat(userInput);

 let number = +prompt("enter the number")
if(number > 0){
    console.log("the number is positive");
}
else if(number < 0){
    console.log("the number is negative");
}
else if(number==0){
    console.log("the number is zero");
}
else{
    console.log("the number is integer");
}
console.log(Number);

// 4. Write a program that takes a character (i.e. string of
//   length 1) and returns true if it is a vowel, false otherwise

// let  vowels = "aeiouAEIOU";

// let Char = prompt("Enter a character:");

// for(let i = 0;i <= vowels.length ; i++){
//   if(vowels === "aeiou"){
//     alert("it's a true");
//   }else if(vowels === "AEIOU"){
//     alert("it's a false")
//   }
//   else{
//     alert("it;s not a vowels")
//   }
//   console.log(vowels[i]);
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// a. Store correct password in a JS variable
let correctPassword = "mySecretPassword";

// b. Ask user to enter his/her password
let userPassword = prompt("Enter your password:");

// c. Validate the two passwords
if (userPassword === "") {
    // i. Check if user has entered password
    console.log("Please enter your password");
} else {
    // ii. Check if both passwords are the same
    if (userPassword === correctPassword) {
        console.log("Correct! The password you entered matches the original password");
    } else {
        console.log("Incorrect password");
    }
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var hour = 13;
var greeting;
if(hour < 18) {
  greeting="good day"
}
else{
  greeting="Good Evening"
}

console.log(greeting);


function convertTo12HourFormat(Hour){

if (Hour === 0) {
  return "12 AM";
} else if (Hour > 0 && Hour < 12) {
  return Hour + " AM";
} else if (Hour === 12) {
  return "12 PM";
} else if (Hour > 12 && Hour < 24) {
  return (Hour - 12) + " PM";
} else {
  return "Invalid hour";
}
}

// Prompt the user to enter the time in 24-hour format
let UserInput = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");
let Hour = parseInt(userInput, 10);

// Validate the input and display the converted time
if (isNaN(Hour) || Hour < 0 || Hour >= 24) {
    console.log("Invalid time entered. Please enter a valid time between 0000 and 2359.");
} else {
  const convertedTime = convertTo12HourFormat(Hour);
    console.log("The time is: " + convertedTime);
}