const bookSection = document.getElementById('book-section');

/*function add(e) {
  const name = document.getElementById('input-name').value;
  const author = document.getElementById('input-author').value;
  const books = [];

  const book = {
    id: (books.length),
    name,
    author,
  };

  if (localStorage.getItem('books') === null) {
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  } else {
    const books = JSON.parse(localStorage.getItem('books'));
    book.id = books.length;
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  document.getElementById('form').reset();
  e.preventDefault();
  window.location.reload();
}*/

document.getElementById('form').addEventListener('submit', add);

/*function remove(id) {
  const books = JSON.parse(localStorage.getItem('books'));

  for (let i = 0; i < books.length; i += 1) {
    if (id === books[i].id) {
      books.splice(i, 1);
    }
  }

  localStorage.setItem('books', JSON.stringify(books));
  window.location.reload();
}*/

/*function loadScreen() {
  const books = JSON.parse(localStorage.getItem('books'));
  for (let i = 0; i < books.length; i += 1) {
    const { id } = books[i];
    const { name } = books[i];
    const { author } = books[i];
    const div = document.createElement('div');
    div.classList.add('book-list');
    const bookName = document.createElement('span');
    bookName.classList.add('book-name');
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function RemoveBtn() {
      remove(id);
    };
    const divider = document.createElement('hr');

    bookName.textContent = name;
    bookAuthor.textContent = author;
    div.append(bookName, bookAuthor, removeBtn);
    bookSection.append(div, divider);
  }
}*/

loadScreen();

class Book {
  constructor(name, author) {
    this.id = null;
    this.name = name;
    this.author = author;
  }

  add(book) {
    const name = document.getElementById('input-name').value;
    const author = document.getElementById('input-author').value;
    const books = [];
  
    if (localStorage.getItem('books') === null) {
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    } else {
      const books = JSON.parse(localStorage.getItem('books'));
      book.id = books.length;
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
    document.getElementById('form').reset();
    e.preventDefault();
    window.location.reload();
  }

  remove(id) {
    const books = JSON.parse(localStorage.getItem('books'));
  
    for (let i = 0; i < books.length; i += 1) {
      if (id === books[i].id) {
        books.splice(i, 1);
      }
    }
  
    localStorage.setItem('books', JSON.stringify(books));
    window.location.reload();
  }
}

function loadScreen() {
  const books = JSON.parse(localStorage.getItem('books'));
  for (let i = 0; i < books.length; i += 1) {
    const { id } = books[i];
    const { name } = books[i];
    const { author } = books[i];
    const div = document.createElement('div');
    div.classList.add('book-list');
    const bookName = document.createElement('span');
    bookName.classList.add('book-name');
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function RemoveBtn() {
      remove(id);
    };
    const divider = document.createElement('hr');

    bookName.textContent = name;
    bookAuthor.textContent = author;
    div.append(bookName, bookAuthor, removeBtn);
    bookSection.append(div, divider);
  }
}

/*class methods {
  constructor() {
    this.id = id;
    this.name = name;
    this.author = author;
  }

  add(book) {
    const name = document.getElementById('input-name').value;
    const author = document.getElementById('input-author').value;
    const books = [];
  
    if (localStorage.getItem('books') === null) {
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    } else {
      const books = JSON.parse(localStorage.getItem('books'));
      book.id = books.length;
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
    document.getElementById('form').reset();
    e.preventDefault();
    window.location.reload();
  }

  remove(id) {
    const books = JSON.parse(localStorage.getItem('books'));
  
    for (let i = 0; i < books.length; i += 1) {
      if (id === books[i].id) {
        books.splice(i, 1);
      }
    }
  
    localStorage.setItem('books', JSON.stringify(books));
    window.location.reload();
  }
}*/