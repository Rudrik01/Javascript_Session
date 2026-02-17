// ✅ Q7 — Bank Account Class

// Create a class:

// Properties:

// ✔ private balance
// ✔ readonly accountNumber

// Methods:

// ✔ deposit
// ✔ withdraw
// ✔ getBalance

// Constraints:

// Cannot access balance outside class

// Cannot modify account number

// 👉 Tests:

// private

// readonly

// encapsulation


class Account{
    private balance:number;
    readonly accountNumber:number;

    constructor(accountNumber:number,balance:number=0){
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(amount:number){
        this.balance+=amount;
        
    }
    withdraw(amount:number){
        if(amount > this.balance){
            throw new Error("Sorry You have not enough Balance");
        }
        this.balance-=amount;
    }
    getBalance():number{
        return this.balance;
    }

};





const account = new Account(12345, 1000);


account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 1300


// ✔ private → cannot access directly
// console.log(account.balance);  ERROR


// ✔ readonly → cannot modify
// account.accountNumber = 9999;  ERROR