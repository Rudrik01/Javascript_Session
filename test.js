// console.log("A");

// async function foo() {
//   console.log("B");

//   await Promise.resolve().then(() => {
//     console.log("C");

//     Promise.resolve().then(() => {
//       console.log("D");
//     });
//   });

//   console.log("E");

//   await Promise.resolve();

//   console.log("F");
// }

// foo();

// Promise.resolve().then(() => {
//   console.log("G");

//   Promise.resolve().then(() => {
//     console.log("H");
//   });
// });

// setTimeout(() => {
//   console.log("I");
// }, 0);

// console.log("J");

// /*
// OUTPUT
// A
// B
// J
// C
// G
// D
// E
// H
// F
// I

// */







// console.log("1");

// async function test() {
//   console.log("2");
  
//   await Promise.resolve().then(() => {
//     console.log("3");
//   });

//   console.log("4");
// }

// test();

// Promise.resolve().then(() => {
//   console.log("5");

//   Promise.resolve().then(() => {
//     console.log("6");
//   });
// });

// setTimeout(() => {
//   console.log("7");
// }, 0);

// console.log("8");



// /*
// OUTPUT
// 1
// 2
// 8
// 3
// 5
// 4
// 6
// 7

// */





// console.log("1");

// async function alpha() {
//   console.log("2");

//   try {
//     await 0;
//     console.log("3");
//     return "A";
//   } finally {
//     console.log("4");
//   }
// }

// async function beta() {
//   console.log("5");

//   const result = await alpha();
//   console.log("6", result);

//   queueMicrotask(() => {
//     console.log("7");
//   });
// }

// beta();

// queueMicrotask(() => {
//   console.log("8");
// });

// Promise.resolve().then(() => {
//   console.log("9");
// });

// setTimeout(() => {
//   console.log("10");
// }, 0);

// console.log("11");


// /*
// 1
// 5
// 2
// 11
// 3
// 4
// 8
// 9
// 6 A
// 7
// 10
// */



let i = 0;

while (i < 5) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
    
    i++;
}

