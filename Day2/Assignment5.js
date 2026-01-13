
let discountedAmount;
const applyCoupon = function(amount,couponCode){
    switch(couponCode){
        case "SAVE10":
            discountedAmount=amount-(amount*0.1);
            console.log(discountedAmount);
            break;
        case "SAVE20":
            discountedAmount=amount-(amount*0.2);
            console.log(discountedAmount);
            break;

        case "NONE":
            console.log(amount);
            break;
        default:
            console.log("Invalid Coupon Code");
            

        
    }
}