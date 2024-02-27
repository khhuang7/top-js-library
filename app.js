const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  let card = document.createElement("div");
  card.setAttribute("class", "book-card");
  card.innerHTML = `<div class="book-cover-details">
      <div class="book-title">${title}</div>
      by
      <div class="book-author">${author}</div>
    </div>
    <div class="book-pages">${pages} pages</div>
    <div class="book-status ${(read === true) ? "read" : "not-read"}">
      ${(read === true) ? "Completed" : "Not read yet"}</div>`;
  library.appendChild(card);
}

// Tester books, to be deleted later
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 216, false);

// Slide form in and out
const newBookForm = document.getElementById("new-book-form");

function slideNewBookDrawer() {
  newBookForm.classList.toggle("open");
}

const newBookBtn = document.getElementById("new-book-btn");
newBookBtn.addEventListener("click", slideNewBookDrawer);

const cancelBtn = document.getElementById("cancel-btn");
cancelBtn.addEventListener("click", slideNewBookDrawer);

// Add new books using the form
const form = document.forms["new-book-form"];

function processForm() {
  form.reportValidity();
  var title = form.title.value;
  var author = form.author.value;
  var pages = form.pages.value;
  var read = form.status.checked;
  addBookToLibrary(title, author, pages, read);
  slideNewBookDrawer();
  form.title.value = "";
  form.author.value = "";
  form.pages.value = "";
  form.status.checked = false;
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  processForm();
});
