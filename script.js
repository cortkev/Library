const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const read = document.getElementById("read").checked;
const bookContainer = document.getElementById('book-container');

let myLibrary = [];

//Book constructor
function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(){
    const book = new Book(this.title.value, this.author.value, this.pages.value, this.read.checked);
    myLibrary.push(book);
    //console.log(myLibrary);
    clearForm();
    giveBookId();
    createCard(book);
    console.log(myLibrary);
    
}

function giveBookId(){
  let i = 0;
    myLibrary.map(n => {
      n['id'] = i;
      i++;
    })
    const index = myLibrary.map(book => book.id);
    const bookIndex = index.slice(-1)[0];
    console.log(bookIndex);
    return bookIndex
}

document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
  });

// clear form after every submission
function clearForm(){
  this.title.value = '';
  this.author.value = '';
  this.pages.value = '';
  this.read.checked = false;
}

function createCard(book){
  giveBookId();
  const div = document.createElement('div');
  div.className = 'cards';
  div.setAttribute('id', giveBookId());

  const cardTitle = document.createElement('h2');
  cardTitle.innerHTML = book.title + " " + div.id;
  div.append(cardTitle);

  const cardAuthor = document.createElement('h3');
  cardAuthor.innerHTML = " by " +  book.author;
  div.append(cardAuthor);

  const cardPages = document.createElement('h3');
  cardPages.innerHTML = book.pages;
  div.append(cardPages);

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-button';
  removeBtn.setAttribute('onclick', 'removeButton(this)');
  
  const removeIcon = document.createElement('img');
  removeIcon.setAttribute('src', 'images/deleteButton.svg');
  removeIcon.className = 'remove-icon';
  removeBtn.append(removeIcon);
  div.append(removeBtn);

  bookContainer.append(div);

 // console.log(index);
}

//index = position in array
function removeButton(e){
  const selectedBookIndex = e.parentElement.id;
  e.parentElement.remove();
  //myLibrary = myLibrary.filter(x => x !== selectedBookIndex);
  console.log(selectedBookIndex);
  myLibrary.splice(selectedBookIndex, 1)
  giveBookId();
  
  console.log(myLibrary);
  //need to remove book from array
}




function displayBooks(){
  myLibrary.forEach(function (book, index){
    createCard(book, index);
    console.log(index);
  });
}