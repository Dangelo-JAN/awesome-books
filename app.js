const bookSection = document.getElementById('book-section');

function add(e) {
  const name = document.getElementById('input-name').value;
  const author = document.getElementById('input-author').value;

  const book = {
    name,
    author,
  };

  if (localStorage.getItem('books') === null) {
    const books = [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  } else {
    const books = JSON.parse(localStorage.getItem('books'));
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  document.getElementById('form').reset();
  e.preventDefault();
  window.location.reload();
}

document.getElementById('form').addEventListener('submit', add);

function remove(name) {
  const books = JSON.parse(localStorage.getItem('books'));

  for (let i = 0; i < books.length; i += 1) {
    if (name === books[i].name) {
      books.splice(i, 1);
    }
  }

  localStorage.setItem('books', JSON.stringify(books));
  window.location.reload();
}

function loadScreen() {
  const books = JSON.parse(localStorage.getItem('books'));
  for (let i = 0; i < books.length; i += 1) {
    const { name } = books[i].name;
    const { author } = books[i].author;
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
      remove(name);
    };
    const divider = document.createElement('hr');

    bookName.textContent = name;
    bookAuthor.textContent = author;
    div.append(bookName, bookAuthor, removeBtn);
    bookSection.append(div, divider);
  }
}

loadScreen();