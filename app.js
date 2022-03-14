const bookSection = document.getElementById('book-section');
const addBook = document.getElementById('add');
const bookList = [{
}];

var names = [];
var authors = [];

for(let i = 0; i < bookList.length; i++){
  const div = document.createElement('div');
  div.classList.add('book-list');
  const bookName = document.createElement('span');
  bookName.classList.add('book-name');
  const bookAuthor = document.createElement('p');
  bookAuthor.classList.add('book-author');
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'Remove';
  const divider = document.createElement('hr');

  bookName.textContent = names[i];
  bookAuthor.textContent = authors[i];
  div.append(bookName, bookAuthor, removeBtn);
  bookSection.append(div, divider);

  names.push(bookList[i].name);
  authors.push(bookList[i].author)
}

console.log(localStorage)


addBook.addEventListener('click', () => {
  const inputName = document.getElementById('input-name').value;
  const inputAuthor = document.getElementById('input-author').value;
  const obj = {};
  obj['name'] = inputName;
  obj['author'] = inputAuthor;
  bookList.push(obj);
  names.push(inputName);
  authors.push(inputAuthor);
  localStorage.setItem('name', names);
  localStorage.setItem('author', authors);
  console.log(bookList);
})