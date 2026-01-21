// 5. Trace the execution of this class logic.

// class Counter {
//   static count = 0;
//   count = 10;

//   constructor() {
//     Counter.count++;
//   }

//   getCount() {
//     return this.count;
//   }

//   static getStaticCount() {
//     return this.count;
//   }
// }

// const c1 = new Counter();
// const c2 = new Counter();

// console.log(c1.getCount());        // ?
// console.log(Counter.getStaticCount()); // ?
// console.log(c1.getStaticCount());  // ?



class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount());        // 10
console.log(Counter.getStaticCount()); // 2
console.log(c1.getStaticCount());  // error ->c1.getStaticCount is not a function




/*
The static count is general means it is common variable for all the object because the static variable is created in stack memory as if new objects are created the normal count variable is created in heap
but it also points to the static count in the static memory and this is applicable whenever new object is created.static object and functions are accessed by class name only.

At line 46 and 47 two new objects are created at every time constructor is call and at every call consturctor increments the stactic count. therefore it will become 2 

now at line 49 getCount function is called using c1 object there in the function normal count is returned therefore it will show 10

At line 50 getStaticFunction is called using class name as it is a static function a static count is returned there it will show 2 after 2 constuctor calls


In line 51 it will show TypeError stating that getStaticFunction is not a function because it is a static function therefore it is called using class name only.





*/