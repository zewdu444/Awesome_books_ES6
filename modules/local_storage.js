import AwesomeBook from './book_list.js';

export default class StoredData extends AwesomeBook {
 storeInputData = () => {
   const inputData = {
     title: document.getElementById('title').value,
     author: document.getElementById('author').value,
     id: Math.floor(Math.random() * 10000),
   };
   const storedData = JSON.parse(localStorage.getItem('storedData'));
   storedData.push(inputData);
   localStorage.setItem('storedData', JSON.stringify(storedData));
   this.createBook(inputData);
 };
}