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
        return "Deposit amount must be greater than 0.";
    },

    withdrawal: function withdrawal (amount) {
        if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return `withdrawal ${amount} sek. New Balance is ${this.balance} sek.`;
        }

        
    },
  
    getAccountName: function accountHolder () {
        return `Account holder name: ${this.accountName}`;
    },

    getError: function () {
        return "Error, chose a valid action.";
    }
};


// Atm functions 
function atm() {
    
    let running = true;

    while (running) {

    const message = parseFloat(
        prompt(
            "Select a choice 1.) See Balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit")   
        );

        switch (message) {
            case 1:
                alert (account.getBalance());
                break;

            case 2:
                const depositAmount = parseFloat(prompt("Enter deposit amount:"));
                alert (account.deposit(depositAmount));
                break;

            case 3:
                const withdrawalAmount = parseFloat(prompt("Enter withdrawal amount:"));
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


// While loop to allow multiple interactions with the ATM
function runATM() {
    let running = true;

    while (running) {
        const message = Number (
            prompt(
            "Select a choice:\n" +
            "1. See balance\n" +
            "2. Deposit\n" +
            "3. Withdrawal\n" +
            "4. See account name\n" +
            "5. Exit"

        )
        );


// Start ATM

runATM();

  
        
console.log(atm("name"));
console.log(atm("balance"));
console.log(atm("deposit", 500));
console.log(atm("withdrawal", 200));
console.log(atm("balance"));



// tillägg stämmer detta???

    let action = prompt(
        "Choose an option:\n" +
        "balance\n" +
        "deposit\n" +
        "withdrawal\n" +
        "name\n" +
        "exit"
    );

    if (action === "exit") {

        running = false;

        alert("Goodbye!");

    } else if (action === "deposit" || action === "withdrawal") {

        let amount = Number(prompt("Enter amount:"));

        alert(atm(action, amount));

    } else {

        alert(atm(action));
    }



