import BookLoad from './modules/book_load.js';
import selectNavigation from './modules/navigation.js';

const newbook = new BookLoad();
newbook.initLoad(newbook.booksList);

const currentDate = document.querySelector('.currentdate');

document.querySelectorAll('button').forEach((occurence) => {
  const id = occurence.getAttribute('id');
  occurence.addEventListener('click', () => {
    selectNavigation(id);
  });
});

const date = new Date();
const localdate = date.toLocaleString();
currentDate.innerHTML = localdate;
