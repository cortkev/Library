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
    clearForm();
    console.log(myLibrary);
    displayBooks();
    
}

function displayBooks(){
  //clears container to print current array
  //before displaying cards
  bookContainer.textContent = '';
  myLibrary.forEach((book) => {
    createCard(book);
  });
}

//give every book in array an id
function giveBookId(){
  let i = 0;
    myLibrary.map(n => {
      n['id'] = i;
      i++;
    })
    const index = myLibrary.map(book => book.id);
}

document.getElementById("form").addEventListener("submit", function(event){
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
  div.setAttribute('id', book.id);

  const cardTitle = document.createElement('h2');
  cardTitle.innerHTML = book.title;
  div.append(cardTitle);

  const cardAuthor = document.createElement('h3');
  cardAuthor.innerHTML = " by " +  book.author;
  div.append(cardAuthor);

  const cardPages = document.createElement('h3');
  cardPages.innerHTML = book.pages;
  div.append(cardPages);

  const btnDiv = document.createElement('div');
  btnDiv.className = 'button-div';
  div.append(btnDiv);

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-button';
  removeBtn.setAttribute('onclick', 'removeButton(this)');
  const removeIcon = document.createElement('img');
  removeIcon.setAttribute('src', 'images/deleteButton.svg');
  removeIcon.className = 'remove-icon';
  removeBtn.append(removeIcon);
  btnDiv.append(removeBtn);

  const readBtn = document.createElement('button');
  readBtn.className = 'read-button';
  btnDiv.append(readBtn);

  readBtn.addEventListener('click', () => { 
    book.read = !book.read;
    displayBooks();
    console.log(myLibrary);
}); 

  if(book.read === true){
    readBtn.textContent = 'read';
  }
  else{
    readBtn.textContent = 'unread';
  }

  bookContainer.append(div);
}

function removeButton(e){
  const selectedBookIndex = e.parentElement.id;
  e.parentElement.remove();
  console.log(selectedBookIndex);
  myLibrary.splice(selectedBookIndex, 1);
  displayBooks();
  
  console.log(myLibrary);
}