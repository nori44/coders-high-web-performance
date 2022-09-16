const headerbtn = document.getElementById('header-btn');
const body = document.getElementById('js-body')
headerbtn.addEventListener('click', function () {
  body.classList.toggle('is-openMenu');
});
