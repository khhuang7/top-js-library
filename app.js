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

// Slide form in and out

const newBookForm = document.getElementById("new-book-form");

function slideNewBookDrawer() {
  newBookForm.classList.toggle("open");
}

const newBookBtn = document.getElementById("new-book-btn");

newBookBtn.addEventListener("click", slideNewBookDrawer);

// Add new books using the form
const form = document.forms["new-book-form"];

function processForm() {
  form.reportValidity();
  var title = form.title.value;
  var author = form.author.value;
  var pages = form.pages.value;
  var read = form.status.checked;
  addBookToLibrary(title, author, pages, read);
  displayBooks();
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  processForm();
});

displayBooks();

// TO DO: Only add one book at a time when displaying