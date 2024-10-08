'use strict';

function openSearchMenu() {
  document.querySelector('.search-menu-open-btn').addEventListener('click', () => {
    document.querySelector('.search-menu').style.display = "block";
  });
};

function closeSearchMenu() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.querySelector('#state-search-input').value = '';
        document.querySelector('.search-menu').style.display = "none";
        clearSearchResult();
    };
  }); 
 
  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('search-menu')) {
      document.querySelector('#state-search-input').value = '';
     
      document.querySelector('.search-menu').style.display = "none";
      clearSearchResult();
    };
  });
};

function clearSearchResult() {
  const searchElement = document.querySelectorAll('#states li');
 
  searchElement.forEach(element => {
    element.classList.add('hide')
  });
};

export { openSearchMenu, closeSearchMenu };
