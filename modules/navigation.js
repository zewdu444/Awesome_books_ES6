const list = document.getElementById('list');
const addNew = document.getElementById('addnew');
const contact = document.getElementById('contact');
const listDisplay = document.querySelector('.list');
const addNewDisplay = document.querySelector('.addBook');
const contactDisplay = document.querySelector('.contact');
const selectNavigation = (selection) => {
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
};

export default selectNavigation;