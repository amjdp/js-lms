// Scope of JS variable without any keyword

// function scope() {
//   user = "baabtra";
//   console.log("User inside function: " + user); // User inside function: baabtra
//   if (true) {
//     age = "10";
//     console.log("User inside block: " + user); // User inside block: baabtra
//     console.log("Age inside block: " + age); // Age inside block: 10
//   }
//   console.log("Age after block: " + age); // Age after block: 10
// }
// scope();
// console.log("User outside function: " + user); // User outside function: baabtra
// console.log("Age outside function: " + age); // Age outside function: 10





// Scope of JS variable with var keyword

 function scope(){
    var user = "baabtra";
    console.log("User inside function: "+user);
    if(true){
        var age = "10";
        console.log("User inside block: "+user);
        console.log("Age inside block: "+age);
    }
    console.log("Age after block: "+age);
 }
 scope()
 console.log("User outside function: "+user);
 console.log("Age outside function: "+age);




// Scope of JS variable with let keyword

//  function scope(){
//     const user = "baabtra";
//     console.log("User inside function: "+user);
//     if(true){
//         let age = "10";
//         console.log("User inside block: "+user);
//         console.log("Age inside block: "+age);
//     }
//     console.log("Age after block: "+age);
//  }
//  scope()
//  console.log("User outside function: "+user);
//  console.log("Age outside function: "+age);
