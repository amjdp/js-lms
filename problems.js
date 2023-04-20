// **********************************************************************************
// check whether a number is palindrome or not
// **********************************************************************************

// function checkPalindrome(string) {
//   const len = string.length;

//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }

// const string = prompt("Enter a string: ");

// const value = checkPalindrome(string);

// console.log(value);


// **********************************************************************************
// check whether a number is armstrong or not
// **********************************************************************************

// // var num=Number(prompt("enter number:"))
// let sum = 0;
// const number = prompt("Enter a three-digit positive integer: ");

// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//   let remainder = temp % 10;

//   sum += remainder * remainder * remainder;

//   temp = parseInt(temp / 10);
// }

// if (sum == number) {
//   console.log(`${number} is an Armstrong number`);
// } else {
//   console.log(`${number} is not an Armstrong number.`);
// }


// **********************************************************************************
// triangle pattern 
// **********************************************************************************

for (var i = 0; i < 5; i++) {
  document.write("<br>");
  for (j = 6 - i; j <= 5; j++) {
    document.write("*");
    //document.write("<br>");
  }
}
