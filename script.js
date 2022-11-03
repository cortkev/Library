// let myLibrary = [];

// function addBookToLibrary(){
//     let bookName = prompt("Please enter your name", "Harry Potter");
    
//     if (bookName != null) {
//         myLibrary += bookName;
//     }

//     // for(let i = 0; i <= myLibrary.lengthl; i++{
//     //     document.getElementById("demo").innerHTML =
//     // "Books: " + myLibrary + ", ";
//     // }
// }

// function Book(title, author, pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;

//     this.info = function(){
//         return title + " by " + author + ", " + pages + ", " + read;    
//     }
// }

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
// console.log(theHobbit.info());

// for(let i = 0; i < myLibrary.length; i++){
//     console.log(myLibrary[i]);
// }



function addBookToLibrary(){
    var div = document.createElement("div");
    div.className = "cards";
    div.style.width = "250px";
    div.style.height = "250px";
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = "Hello";

    document.getElementById('book-container').appendChild(div);
}