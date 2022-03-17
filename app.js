class BookList {
  bookSection = document.getElementById("book-section");

  addBtn = document.getElementById("add");

  createEmpty = () => {
    const books = [];
    localStorage.setItem("books", JSON.stringify(books));
  };

  add = (e) => {
    const name = document.getElementById("input-name").value;
    const author = document.getElementById("input-author").value;
    const books = [];

    const book = {
      id: books.length,
      name,
      author,
    };

    if (localStorage.getItem("books") === null) {
      books.push(book);
      localStorage.setItem("books", JSON.stringify(books));
    } else {
      const books = JSON.parse(localStorage.getItem("books"));
      book.id = books.length;
      books.push(book);
      localStorage.setItem("books", JSON.stringify(books));
    }
    document.getElementById("form").reset();
    e.preventDefault();
    window.location.reload();
  };

  remove = (id) => {
    const books = JSON.parse(localStorage.getItem("books"));
    for (let i = 0; i < books.length; i += 1) {
      if (id === books[i].id) {
        books.splice(i, 1);
      }
    }

    localStorage.setItem("books", JSON.stringify(books));
    window.location.reload();
  };

  loadScreen() {
    const books = JSON.parse(localStorage.getItem("books"));
    if (!books) {
      this.createEmpty();
    }
    for (let i = 0; i < books.length; i += 1) {
      const { id } = books[i];
      const { name } = books[i];
      const { author } = books[i];
      const div = document.createElement("div");
      div.classList.add("book-list");
      const bookName = document.createElement("p");
      bookName.classList.add("book-name");
      const bookAuthor = document.createElement("p");
      bookAuthor.classList.add("book-author");
      const divBtn = document.createElement("div");
      divBtn.classList.add("btn-container");
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-btn");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        this.remove(id);
      });
      divBtn.append(removeBtn);

      bookName.textContent = `"${name}" by`;
      bookAuthor.textContent = author;
      div.append(bookName, bookAuthor, divBtn);
      this.bookSection.append(div);
    }
  }
}

const book = new BookList();
document.getElementById("form").addEventListener("submit", book.add);
book.loadScreen();

const dt = new Date();
document.getElementById("date-time").innerHTML = dt;

const list = document.getElementById("book-section");
const addNew = document.getElementById("add-book");
const contact = document.getElementById("contact-section");

const showList = document
  .getElementById("list")
  .addEventListener("click", () => {
    if (!list.classList.contains("show")) {
      list.classList.replace("hide", "show");
      addNew.classList.replace("show", "hide");
      contact.classList.replace("show", "hide");
    }
  });
const showAddNew = document
  .getElementById("add-b")
  .addEventListener("click", () => {
    if (!addNew.classList.contains("show")) {
      list.classList.replace("show", "hide");
      addNew.classList.replace("hide", "show");
      contact.classList.replace("show", "hide");
    }
  });
const showContact = document
  .getElementById("contact-a")
  .addEventListener("click", () => {
    if (!contact.classList.contains("show")) {
      list.classList.replace("show", "hide");
      addNew.classList.replace("show", "hide");
      contact.classList.replace("hide", "show");
    }
  });
