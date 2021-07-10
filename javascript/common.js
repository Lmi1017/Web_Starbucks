const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})

// focus
searchInputEl.addEventListener('focus', function () {
  searchInputEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

// focus 제거
searchInputEl.addEventListener('blur', function () {
  searchInputEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


// year
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //해당 년