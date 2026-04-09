// ⭐ Async Question 2 (Parallel vs Sequential Trap)

// You have:

// fetchUser()
// fetchSettings()
// fetchNotifications()


// These APIs are independent.

// Task:

// Write:

// async function loadApp()


// Return:

// {
//  user,
//  settings,
//  notifications
// }



async function loadApp(){
    try{
        const[user,settings,notifications]=await Promise.all([
            fetchUser(),
            fetchSettings(),
            fetchNotifications(),
        ]);

        return {
            user:user,
            settings:settings,
            notifications:notifications
        };
    }catch(err){
        console.log(err);
    }

}