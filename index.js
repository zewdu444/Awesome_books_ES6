class AwesomeBook {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.booksList = [];
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

  storeInputData() {
    const inputData = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
      id: Math.floor(Math.random() * 10000),
    };
    const storedData = JSON.parse(localStorage.getItem('storedData'));
    storedData.push(inputData);
    localStorage.setItem('storedData', JSON.stringify(storedData));
    this.createBook(inputData);
  }

  initLoad(booksList) {
    const storedData = JSON.parse(localStorage.getItem('storedData'));
    if (storedData) {
      storedData.forEach((book) => {
        this.createBook(book);
      });
    } else {
      localStorage.setItem('storedData', JSON.stringify(booksList));
      booksList.forEach((book) => {
        this.createBook(book);
      });
    }
    const addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', (event) => {
      this.storeInputData();
      event.preventDefault();
      const clearAuthor = document.getElementById('author');
      const clearTitle = document.getElementById('title');
      clearAuthor.value = '';
      clearTitle.value = '';
    });
  }
}
const newbook = new AwesomeBook();
newbook.initLoad(newbook.booksList);
// navigation starts here
const list = document.getElementById('list');
const addNew = document.getElementById('addnew');
const contact = document.getElementById('contact');
const listDisplay = document.querySelector('.list');
const addNewDisplay = document.querySelector('.addBook');
const contactDisplay = document.querySelector('.contact');
const currentDate = document.querySelector('.currentdate');

function selectNavigation(selection) {
  switch (selection) {
    case 'addnew':
    {
      listDisplay.style.display = 'none';
      contactDisplay.style.display = 'none';
      addNewDisplay.style.display = 'flex';
      addNew.style.color = '#4765c5';
      list.style.color = 'black';
      contact.style.color = 'black';
      break;
    }
    case 'list':
    {
      listDisplay.style.display = 'block';
      contactDisplay.style.display = 'none';
      addNewDisplay.style.display = 'none';
      addNew.style.color = 'black';
      list.style.color = '#4765c5';
      contact.style.color = 'black';
      break;
    }

    case 'contact':
    {
      listDisplay.style.display = 'none';
      contactDisplay.style.display = 'block';
      addNewDisplay.style.display = 'none';
      addNew.style.color = 'black';
      list.style.color = 'black';
      contact.style.color = '#4765c5';
      break;
    }

    default:
      break;
  }
}
document.querySelectorAll('button').forEach((occurence) => {
  const id = occurence.getAttribute('id');
  occurence.addEventListener('click', () => {
    selectNavigation(id);
  });
});
const date = new Date();
const localdate = date.toLocaleString();
currentDate.innerHTML = localdate;
