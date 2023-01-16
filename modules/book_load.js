import AwesomeBook from './book_list.js';
import StoredData from './local_storage.js';

const storage = new StoredData();
export default class BookLoad extends AwesomeBook {
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
      storage.storeInputData();
      event.preventDefault();
      const clearAuthor = document.getElementById('author');
      const clearTitle = document.getElementById('title');
      clearAuthor.value = '';
      clearTitle.value = '';
    });
  }
}