/* burger*/
let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav__list');
let menulinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('nav__list--active');

    document.body.classList.toggle('stop-scroll');
})

menulinks.forEach(function(el) {
    el.addEventListener('click', function() {

        burger.classList.remove('burger--active');

        menu.classList.remove('nav__list--active');

        document.body.classList.remove('stop-scroll');
    })
})



/* search */
let btnSearch = document.querySelector('.btn__search');
let inputSearch = document.querySelector('.nav__search');
let closeSearch = document.querySelector('.btn__search-close');


btnSearch.addEventListener('click', function() {
    inputSearch.classList.add('nav__search--active');
    btnSearch.classList.add('btn__search:active');
})
closeSearch.addEventListener('click', function() {
    inputSearch.classList.remove('nav__search--active');
})

/* how with tabs */
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) { btn.classList.remove('tabs-nav__btn--active') });
        e.currentTarget.classList.add('tabs-nav__btn--active');

        tabsItem.forEach(function(element) { element.classList.remove('tabs-item--active') });

        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active'); /* важно! обратные ковычки */

    });
});


/* hero with swiper */
new Swiper('.hero__swiper', {
    speed: 300,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

})