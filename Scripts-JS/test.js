//this is just me testing around code "cludder"//



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



