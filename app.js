const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Tester books, maintained for demo purposes
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 216, false);

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  let card = document.createElement("div");
  card.setAttribute("class", "book-card");
  card.innerHTML = `<div class="book-cover-details">
      <div class="book-title">${title}</div>
      by
      <div class="book-author">${author}</div>
    </div>
    <div class="book-pages">${parseInt(pages)} pages</div>
    <div class="row">
      <div class="book-status ${(read === true) ? "read" : "not-read"}">${(read === true) ? "Completed" : "Not read yet"}</div>
      <button class="remove">
        <i class="fa fa-trash-o" aria-label="remove book"></i>
      </button>
    </div>`;
  library.appendChild(card);

  let removeBtn = card.querySelector("button.remove");
  removeBtn.addEventListener("click", removeBookFromLibrary);

  let readDiv = card.querySelector(".book-status");
  readDiv.addEventListener("click", changeReadStatus);}

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

// Remove book using button
function findIndexOfBook(element) {
  let card = element.closest(".book-card");
  let title = card.querySelector(".book-title").innerHTML;
  let author = card.querySelector(".book-author").innerHTML;
  let pages = card.querySelector(".book-pages").innerHTML.split(" ")[0];
  let readStatus = card.querySelector(".book-status").textContent.trim();
  let read = (readStatus === "Completed")
  
  let index = myLibrary.findIndex(
    (book) => book.title === title &&
      book.author === author &&
      book.pages == pages &&
      book.read === read
  );
  return index;
}


function removeBookFromLibrary() {
  let index = findIndexOfBook(this);
  myLibrary.splice(index, 1);
  this.closest(".book-card").remove();
}

// Toggle read status of individual books
function changeReadStatus() {
  let book = myLibrary[findIndexOfBook(this)];
  book.changeRead();

  this.classList.toggle("not-read");
  this.classList.toggle("read");

  if (book.read) {
    this.textContent = "Completed";
  } else {
    this.textContent = "Not read yet";
  }
}

Book.prototype.changeRead = function() {
  this.read = !(this.read);
}