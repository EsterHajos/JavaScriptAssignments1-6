// Assignment Lesson JS03: Conditional Statements and Functions //


// Instructions:  Write a isValidPassword function  
// It accepts 2 arguments: password and username  P
// assword must:  
// - be at least 8 characters  
// - cannot contain spaces  
// - cannot contain the username  
// If all requirements are met, return true,  
// otherwise return false   //



function isValidPassword (password, username) {
    if (password.lenght < 8) return false;
    if (password.includes(" ")) return false;
    if (password.includes (username)) return false;

    return true; 
    
}

console.log(isValidPassword("test", "test"));
