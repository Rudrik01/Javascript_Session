const ages= [25, -5, 18, 0, 40];

const filteredAges=ages.filter((age)=>{
    if(age>0){
        return age;
    }
});

console.log(filteredAges);