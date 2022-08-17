
const inform = document.querySelector('.popup__info')
const link = document.querySelector('.catalog__link')



window.addEventListener('click', function (event) {

   inform?.classList.toggle('popup__close')

   if (event.target.hasAttribute('data-link')) {
      inform?.classList.remove('popup__close')
   }

});