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

    getBalance: function () {
        return `Account Balance: ${this.balance} sek`;
    },

    deposit: function (newBalance) {
        if (newBalance > 0) {
            this.balance += newBalance;
            return `New Balance after added ${newBalance} sek deposit is: ${this.balance} sek `;
        } 
        return "Deposit amount must be greater than 0.";
    },

    withdrawal: function (amount) {
        if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return `withdrawal ${amount} sek. New Balance is ${this.balance} sek.`;
        }

        
    },
  
    getAccountName: function () {
        return `Account holder name: ${this.accountName}`;
    },

    getError: function () {
        return "Error, choose a valid action.";
    }
};


// ATM function

function atm() {
    
    let running = true;

    while (running) {

    const message = Number(
        prompt(
        "Select a choice :\n" +
        "1. See balance\n" +
        "2. Deposit\n" +
        "3. Withdrawal\n" +
        "4. Get account name\n" +
        "5. Exit"
    )
);


        switch (message) {
            case 1:
                alert (account.getBalance());
                break;

            case 2:
                const depositAmount = Number(prompt("Enter deposit amount:"));
                alert (account.deposit(depositAmount));
                break;

            case 3:
                const withdrawalAmount = Number(prompt("Enter withdrawal amount:"));
                alert (account.withdrawal(withdrawalAmount));
                break;

            case 4:
                alert (account.getAccountName());
                break;

            case 5:
                alert ("Thanks for using the ATM!");
                running = false;
                break;
           
                default:
                alert (account.getError());
        }

    }
}

// Start ATM
atm();

