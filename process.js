// async function getUsers(){
//     try{
//         const response =await fetch('https://api.example.com/users');
//         if(!response.ok){
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data;
//     }
//     catch(error){
//         console.error('There has been a problem with your fetch operation:', error);
//     }
   
// }


// function debounce(fn ,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer =setTimeout(()=>{
//            f
//         },300);
//     }
// };

// const search = debounce(()=>{
//    console.log("API CALL");
// },500);


// const users = [
//  {name:"A",role:"admin"},
//  {name:"B",role:"user"},
//  {name:"C",role:"admin"}
// ];

// const groupedUsers=users.reduce((acc,curr)=>{
//     if(acc[curr.role]){
//         acc[curr.role].push(curr);
//     }else{
//         acc[curr.role]=[curr];
//     }
//     return acc; 
// });
// console.log(groupedUsers);



// const unique = Array.from(
//    new Map(arr.map(item=>[item.id,item])).values()
// )
// function user(role){
//     this.role=role
    
// };
// const a=new user("admin");
// console.log(a.role);

// user.prototype.role="user";
// console.log(a.role);
// console.log(user.prototype.role);

// const user = {
//   name: "Alex",
//   xyz() {
//     btn.addEventListener("click", function () {
//       console.log(this.name);
//     });
//   }
// };
// user.xyz();



// class object {
//   name= "JS";
//   show() {
//     setTimeout(()=>{
//       console.log(this.name);
//     }, 0);
//   }
// };
// const obj = new object();
// const p=obj.show;
// p();



// const arr=[1,2,3,4,5,6,1,2,3];
// const unique = [...new Set(arr)];
// console.log(unique);



// const user = [
//   {id:1,tags:["js","node"]},
//   {id:2,tags:["python","django"]},
//   {id:1,tags:["js","react"]}
// ];



// Summary={
//   user:"alex",
//   postCount:5,
//   commentCount:10,

// };




const people = {
  bob: "JS Developer",
  alice: "AI Engineer",
  jon: "JS Developer",
  nick: "UX Designer",
};

function flipObject(people) {
    let temp=[];
    for(pep of  Object.values(people)){
      console.log(pep);
    }
    return {};
}
flipObject(people);