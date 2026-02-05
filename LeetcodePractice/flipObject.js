// 29.flipObject
// Write a function named flipObject that receives an Object describing people and their jobs and returns a new object with the jobs as keys, and names as values.

// Example 1
// Input
// people

// =
// {…}
// alice: "AI Engineer"
// bob: "JS Developer"
// jon: "JS Developer"
// nick: "UX Designer"
// <prototype>: Object
// Output
// {…}
// AI Engineer: (1) [ "alice" ]
// JS Developer: (2) [ "bob", "jon" ]
// UX Designer: (1) [ "nick" ]
// <prototype>: Object



const people = {
  bob: "JS Developer",
  alice: "AI Engineer",
  jon: "JS Developer",
  nick: "UX Designer",
};

function flipObject(people) {
    let result={};
    for(const key of Object.keys(people)){
      if(!result[people[key]]){
        result[people[key]]=[];
      }
      result[people[key]].push(key);
      
    }
    return result;
}

export { flipObject };
