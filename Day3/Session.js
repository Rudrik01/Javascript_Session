const user={
    name:"Rudrik",
    email:"xyz@gmail.com",
    settings: {
        theme:"light"

    },


    printInfo: function (){
        console.log(`User ${this.name} uses ${this.settings.theme}`)
    },
};





const updateUser={
    ...user,name:"Admin",
};


user.printInfo();


updateUser.printInfo();
