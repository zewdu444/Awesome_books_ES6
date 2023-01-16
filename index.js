import BookLoad from './modules/book_load.js';
import selectNavigation from './modules/navigation.js';
import { DateTime } from './modules/luxon_min.js';

const newbook = new BookLoad();
newbook.initLoad(newbook.booksList);

const currentDate = document.querySelector('.currentdate');

document.querySelectorAll('button').forEach((occurence) => {
  const id = occurence.getAttribute('id');
  occurence.addEventListener('click', () => {
    selectNavigation(id);
  });
});

const date = DateTime.now();
currentDate.innerHTML = date.toLocaleString(DateTime.DATETIME_MED);
