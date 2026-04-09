// Q4. Global vs. Local Scope

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus());


/*
Output Prediction: "Online"
Explanation: In this code,we have a global variable status set to "offline" and an object server with its own status property set to "online".The getStatus method returns the status property of the server object using this keyword,which refers to the server object itself.Therefore,when we call server.getStatus(),it returns "Online".


*/
