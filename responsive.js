const mediaQuery = window.matchMedia('(max-width: 554px)');
const formSubmit = document.querySelector('.search');
const previewRecipe = document.querySelector('.results');
const searchResults = document.querySelector('.search-results');
const recipeContainer = document.querySelector('.recipe');
const backBtn = document.querySelector('#exit-icon');
const previewFromBookmark = document.querySelector('.bookmarks__list');

if (!sessionStorage.getItem('reloaded')) {
  sessionStorage.setItem('reloaded', 'true');
  location.reload();
}

if (mediaQuery.matches) {
  formSubmit.addEventListener('submit', function (e) {
    console.log('Clicked');
    e.preventDefault();
    searchResults.style.display = 'block';
    document.querySelector('.recipe').style.display = 'none';
  });

  previewRecipe.addEventListener('click', function () {
    document.querySelector('.search-results').style.display = 'none';
    document.querySelector('.recipe').style.display = 'block';
    window.scrollTo(0, 0);
  });

  recipeContainer.addEventListener('click', function (e) {
    const btn = e.target.closest('#exit-icon');

    if (!btn) return;
    searchResults.style.display = 'block';
    document.querySelector('.recipe').style.display = 'none';
  });

  previewFromBookmark.addEventListener('click', function () {
    console.log('Clicked bookmark');
    document.querySelector('.search-results').style.display = 'none';
    document.querySelector('.recipe').style.display = 'block';
  });
}
