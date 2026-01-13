let role="ADMIN";


switch(role){
    case "ADMIN":
        console.log("ADMIN → Full access");
        break;
    case "USER":
        console.log("USER → Limited access");
        break;
    case "MANAGER":
        console.log("MANAGER → Moderate access");
        break;

    default:
        console.log("default → Invalid role");
        break;
}
