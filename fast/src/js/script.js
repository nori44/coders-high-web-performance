const headerbtn = document.getElementById('header-btn');
const body = document.getElementById('js-body')
headerbtn.addEventListener('click', function () {
  console.log(333);
  body.classList.toggle('is-openMenu');
});
