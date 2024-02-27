const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 216, false);

function displayBooks() {
  const library = document.getElementById("library");
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookStatus = 

    card = document.createElement("div");
    card.setAttribute("class", "book-card");
    card.innerHTML = `<div class="book-cover-details">
        <div class="book-title">${book.title}</div>
        by
        <div class="book-author">${book.author}</div>
      </div>
      <div class="book-pages">${book.pages} pages</div>
      <div class="book-status ${(book.read === true) ? "read" : "not-read"}">
        ${(book.read === true) ? "Not read yet" : "Completed"}</div>`;
    library.appendChild(card);
  }
}

const newBookForm = document.getElementById("new-book-form");

function slideNewBookDrawer() {
  if (newBookForm.classList.contains("closed")) {
    newBookForm.classList = "open";
  } else {
    newBookForm.classList = "closed";
  }
}

const newBookBtn = document.getElementById("new-book-btn");

newBookBtn.addEventListener("click", slideNewBookDrawer);

displayBooks();