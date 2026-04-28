// Assignment lesson JS6: Practice.  


//Instructions  
//Create a small app to track books you’ve read or want to read (If you are not into books, feel free to change it to movies, etc). Use prompt and alert to simulate the menu.  
//You will:  
//Use objects to represent books  
//Store multiple books in an array  
//Write functions to add, list and update books  
//Requirements:  
//A library array to store all book objects  
//Each book should have:  
//Title  
//Author  
//isRead  
//Implement these functions:  
//addBook() – asks for details and adds a new book object to the library  
//listBooks() – display a list of all books (console.log works fine here)  
//markAsRead(title) – finds a book by title and sets isRead to true  


let running = true;
let library = [];  //behöver jag denna???

//funtion add book
function addBook () {
    const title = prompt ("Book title name")
    const author = prompt ("Author name")
    const isRead = prompt (Have you read it? ("yes/no")); //kan man göra true eller false här? 


    const isRead = isReadInput.toLowerCase() === "yes";

    const book = {
        title: title,
        author: author,
        isRead: isRead
    };

    library.push(book);

    alert("Book added!");
}


//funtion list book 
function listBooks() {
    if (library.length === 0) {
        console.log("Library is empty");
        return;
    }

    let i = 1;
    for (const book of library) {
        console.log(`${i}. ${book.title} by ${book.author} - ${book.isRead ? "Read" : "Not Read"}`);
        i++;
    }  //kan jag göra denna enklare?
}


// funtion mark as read 
function markAsRead(title) {
    for (const book of library) {
        if (book.title === title) {
            book.isRead = true; 
            alert ("Book is read!");
            return;
        }
    }

}

//funtions=
//1. add book 
//2. list books
//3. mark as read 


while (running) {
    const choice = prompt (`
        Book Tracker
        1. Add Book
        2. List Books 
        3. Mark Book as Read 
        4. Exit
        Enter your choice: `); 

        switch (choice) {
            case "1":
                addBook ();
                break;
            case "2":
                listBooks ();
                break;
            case "3":
                const title = prompt ("Enter the title of the book to mark as read:");
                markAsRead(title);
                break;
            case "4":
                running = false;
                alert ("Goodbye!");
                break;
            default:
                altert ("Invalid choice.");
        }
}
