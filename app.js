const myLibrary = [
  { title: "Book1", author: "Author1", pages: "200", isRead: true },
  { title: "Book2", author: "Author2", pages: "150", isRead: false },
];

// the constructor...
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// Disable Submit Button (Default Behaviour)
const submit_btn = document.querySelector("#submit-btn");
submit_btn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
  },
  false
);

// To get values
const input_title = document.querySelector("#input_title");
const input_author = document.querySelector("#input_author");
const input_number = document.querySelector("#input_number");
const input_checkbox = document.querySelector("#read");

// Close Dialog with Submit Button
submit_btn.addEventListener("click", () => {
  addBookToLibrary(
    input_title.value,
    input_author.value,
    input_number.value,
    input_checkbox.checked
  );
  dialog.close();
  input_title.value = "";
  input_author.value = "";
  input_number.value = "";
  input_checkbox.checked = false;
});

function addBookToLibrary(
  input_title,
  input_author,
  input_number,
  input_checkbox
) {
  let card = new Book(input_title, input_author, input_number, input_checkbox);
  myLibrary.push(card);
}

// LOOP TO ADD myLibrary BOOKS to DOM
for (let books of myLibrary) {
  const div_card = document.createElement("div");
  div_card.classList.add("card");

  const title = document.createElement("h4");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const buttons = document.createElement("div");
  buttons.setAttribute("id", "buttons");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  button1.classList.add("button1");
  button2.classList.add("button2");

  title.textContent = books.title;
  author.textContent = books.author;
  pages.textContent = books.pages;
  button1.textContent = "Not Read";
  button2.textContent = "Delete";

  div_card.appendChild(title);
  div_card.appendChild(author);
  div_card.appendChild(pages);
  div_card.appendChild(buttons);
  buttons.appendChild(button1);
  buttons.appendChild(button2);

  const cards = document.querySelector("#cards");
  cards.appendChild(div_card);
}

// TO CHANGE COLOR AND STATUS OF READ AND NOT READ
const read_btn = document.querySelector(".button1");
read_btn.addEventListener("click", () => {
  read_btn.classList.toggle("red_btn");
  read_btn.textContent = "Read";
  if (read_btn.getAttribute("class") == "button1 green_btn red_btn") {
    read_btn.textContent = "Not Read";
  }
});

// TO TOGGLE DIALOG BOX FOR INPUT
const dialog = document.querySelector("dialog");
const showDialog = document.querySelector("#add-btn");

showDialog.addEventListener("click", () => {
  dialog.showModal();
});
// TO CLOSE DIALOG BOX BY CLICKING ON BACKDROP
dialog.addEventListener("click", (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});
