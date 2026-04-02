// ### Exercise 2: setTimeout in Loop (Fix the Bug)


// **Task:** Fix the following code so it logs 0, 1, 2 instead of 3, 3, 3.


// ```javascript
// // BUGGY CODE - Fix this
// for (var i = 0; i < 3; i++) {
//  setTimeout(function() {
//    console.log(i); // Currently logs: 3, 3, 3
//  }, 1000);
// }


// TODO: Fix the code above to log 0, 1, 2
for (let i = 0; i < 3; i++) {
 setTimeout(function() {
   console.log(i); 
 }, 1000);
}


/*
To achieve the expected output we have to initialised the variable i with let as it is a block scope.


*/