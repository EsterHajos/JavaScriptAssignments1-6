// Assignment lesson JS5: Objects and Scope.  

// Instructions:  

//  Create an object called account that has the following properties:  
// -accountName
// - balance
// - getBalance
// - deposit
// - withdrawal
// - getAccountName
// - accountError


// Bank account information
const account= {
    accountName: "Ester",

    balance: 5000,

    getBalance: function balance () {
        return `Account Balance: ${this.balance} sek`;
    },

    deposit: function deposit (newBalance) {
        if (newBalance > 0) {
            this.balance += newBalance;
            return `New Balance after added ${newBalance} sek deposit is: ${this.balance} sek `;
        } 
    },

    withdrawal: function withdrawal (amount) {
        if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return `withdrawal ${amount} sek. New Balance is ${this.balance} sek.`;
        }

        
    },
  
    getAccountName: function accountHolder () {
        return `Account holder name: ${this.accountName}`;
    }
}


// Atm functions 
function atm(action, amount) {
  switch (action) {
    case "balance":
      return account.getBalance();

    case "deposit":
      return account.deposit(amount);

    case "withdrawal":
      return account.withdrawal(amount);

    case "name":
      return account.getAccountName();

    default:
      return "Invalid action.";
  }
}

console.log(atm("name"));
console.log(atm("balance"));
console.log(atm("deposit", 500));
console.log(atm("withdrawal", 200));
console.log(atm("balance"));