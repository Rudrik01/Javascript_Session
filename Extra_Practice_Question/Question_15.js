// Exercise 15 – Fix the Bug
// const obj = {
//   value: 10,
//   print() {
//     setTimeout(function() {
//       console.log(this.value);
//     }, 1000);
//   }
// };
// obj.print();


// ➡ Fix so it prints 10

const obj = {
  value: 10,
  print() {
    setTimeout(()=> {
      console.log(this.value);
    }, 1000);
  }
};
obj.print();
