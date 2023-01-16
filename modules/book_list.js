export default class AwesomeBook {
  constructor(id, title, author, booksList = []) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.booksList = booksList;
  }

  createBook(book) {
    const booksCont = document.getElementById('booksCont');
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.id = `book-${book.id}`;
    const bookElement = `
        <h4 class="bookTitle">"${book.title}"</h4>
        <p class="bookAuthor">by</p>
        <p class="bookAuthor">${book.author}</p>
        <button class="removeBtn">Remove</button>
      `;
    bookDiv.innerHTML += bookElement;
    bookDiv.querySelector('.removeBtn').addEventListener('click', (event) => {
      const book = document.getElementById(event.target.parentElement.id);
      this.booksList.splice(event.target.parentElement.id, 1);
      book.parentElement.removeChild(book);
      let storedData = JSON.parse(localStorage.getItem('storedData'));
      storedData = storedData.filter((bookobj) => {
        if (bookobj.id.toString() === book.id.substring(5, book.id.length)) {
          return false;
        }
        return true;
      });
      localStorage.setItem('storedData', JSON.stringify(storedData));
    });
    booksCont.append(bookDiv);
    this.booksList.push(book);
  }
}
