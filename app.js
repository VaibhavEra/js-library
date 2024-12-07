// Array to Store Books
const myLibrary = [];

// the constructor...
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(
  input_title,
  input_author,
  input_number,
  input_checkbox
) {
  let card = new Book(input_title, input_author, input_number, input_checkbox);
  myLibrary.push(card);
}

// VARIABLES TO HOLD USER INPUT
const input_title = document.querySelector("#input_title");
const input_author = document.querySelector("#input_author");
const input_number = document.querySelector("#input_number");
const input_checkbox = document.querySelector("#read");

// Submit Button Action
const submit_btn = document.querySelector("#submit-btn");
submit_btn.addEventListener("click", () => {
  addBookToLibrary(
    input_title.value,
    input_author.value,
    input_number.value,
    input_checkbox.checked
  );
  input_title.value = "";
  input_author.value = "";
  input_number.value = "";
  input_checkbox.checked = false;
  Loop();
  dialog.close();
});

// LOOP TO ADD myLibrary BOOKS to DOM
let books = 0;
const Loop = () => {
  while (books < myLibrary.length) {
    const div_card = document.createElement("div");
    div_card.classList.add("card");

    const title = document.createElement("h4");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const buttons = document.createElement("div");
    buttons.setAttribute("id", "buttons");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");

    div_card.classList.add("card");
    buttons.setAttribute("id", "buttons");
    button1.classList.add("button1");
    button2.classList.add("button2");

    title.textContent = `"${myLibrary[books].title}"`;
    author.textContent = `~by ${myLibrary[books].author}`;
    pages.textContent = `${myLibrary[books].pages} Pages`;
    if (myLibrary[books].isRead) {
      button1.textContent = "Read";
      button1.classList.add("green_btn");
    } else {
      button1.textContent = "Not Read";
      button1.classList.add("red_btn");
    }
    button2.textContent = "Delete";

    div_card.appendChild(title);
    div_card.appendChild(author);
    div_card.appendChild(pages);
    div_card.appendChild(buttons);
    buttons.appendChild(button1);
    buttons.appendChild(button2);

    const cards = document.querySelector("#cards");
    cards.appendChild(div_card);
    books++;
  }
};

// Disable Submit Button (Default Behaviour)
submit_btn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
  },
  false
);

// TO TOGGLE DIALOG BOX FOR INPUT
const dialog = document.querySelector("dialog");
const add_btn = document.querySelector("#add-btn");

add_btn.addEventListener("click", () => {
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

// To Delete Indivial Cards
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("button2")) {
    const card = e.target.closest(".card");
    if (card) {
      card.remove();
    }
  }
});

// TO CHANGE COLOR AND STATUS OF READ AND NOT READ

document.querySelector("#cards").addEventListener("click", (e) => {
  if (e.target.classList.contains("button1")) {
    const read_btn = e.target;
    if (read_btn.classList.contains("green_btn")) {
      read_btn.classList.remove("green_btn");
      read_btn.classList.add("red_btn");
      read_btn.textContent = "Not Read";
    } else if (read_btn.classList.contains("red_btn")) {
      read_btn.classList.remove("red_btn");
      read_btn.classList.add("green_btn");
      read_btn.textContent = "Read";
    }
  }
});

// div_card.setAttribute("data-id", ++dataNo); (Alternative way)this assign data-id to each card for deletion
